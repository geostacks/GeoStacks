import os
import pandas as pd
import itertools
# from shapely.geometry import Point, Polygon, MultiPolygon, box
import numpy as np
import requests
import boto3
import botocore
import joblib
import pkgutil
import intake as it
from datetime import datetime

# UI components
import ipyleaflet as ilfl
from ipyleaflet import Polygon
import ipywidgets as iwg


class SpatialIndexL3:

    def __init__(self, name='ls8', idx=None):

        self.name = name
        self.read()
        if idx:
            self.data = self.data.loc[idx]
        #self.tree = None


    def read(self):

        # Hacky for now...
        if self.name == 'LS8' or 'ls8':
            fdata = os.path.join(os.path.dirname(os.path.realpath(__file__)), 
                                 'sensors/' + self.name + '.csv')
            ftree = os.path.join(os.path.dirname(os.path.realpath(__file__)), 
                                 'sensors/' + self.name + '.tree')
            fcat = os.path.join(os.path.dirname(os.path.realpath(__file__)), 
                                 'sensors/' + self.name + '.yaml')
            self.data = pd.read_csv(fdata)
            # Not needed? csv is already stored as int I think...
            # self.data = self.data.astype({'path': int,
            #                                            'row': int})
            self.tree = joblib.load(ftree)
            self.intake = it.open_catalog(fcat)
        else:
            print('Error: Sensor not implemented')
        # geometry_collection = self.gen_geometries()
        # self.footprint = gpd.GeoDataFrame(self.data,
        #                                   geometry=geometry_collection)
        # self.footprint = self.footprint.drop(['lat_UL', 'lon_UL', 'lat_UR',
        #                                       'lon_UR', 'lat_LL', 'lon_LL',
        #                                       'lat_LR', 'lon_LR'], axis=1)


    def make_pts(self, lat, lon):
        "input is degrees"
        points = np.vstack((lat, lon)).T
        points = np.radians(points)
        if len(points) == 1:
            points = points.reshape(1, -1)
        return points

    def point_in_box(self, idx, points):
        """Returns 'True' if point is in box, else 'False'
           `points` is expected to be from `make_pts` (i.e.,  radian vector)

           ...think that points can be singular or multiple?"""
        footprint = self.get_footprint(idx)
        center_lon = np.radians(self.data.lon_CTR.loc[idx])
        center_lat = np.radians(self.data.lat_CTR.loc[idx])
        # these are the edge segmentsin lon/lat space
        supports = [footprint[0]-footprint[1],
                    footprint[1]-footprint[2],
                    footprint[2]-footprint[3],
                    footprint[0]-footprint[3]]
        normals = np.array([(s[1], -s[0]) for s in supports])
        pts = [footprint[0],   # a point within each edge
               footprint[1],
               footprint[2],
               footprint[3]]
        bdry_values = np.array([np.sum(n * p) for n, p in zip(normals, pts)])
        center_values = [np.sum(n * [center_lat, center_lon]) for n in normals]
        center_signs = np.sign(center_values - bdry_values)

        normal_mul = np.asarray(points).dot(normals.T)
        values_ = normal_mul - bdry_values[None, :]
        signs_ = np.sign(values_) * center_signs[None, :]
        return np.squeeze(np.all(signs_ == 1, 1))

    def get_footprint(self, idx):
        """ Returns (4,2) (rows, columns) array of coordinate corners (lat, lon)
        idx is an entry from q() in LS8
        corners start UL and increase clockwise"""
        # Reorder columns for sensible reshape
        sub = self.data[['lat_UL', 'lon_UL',
                         'lat_UR', 'lon_UR',
                         'lat_LR', 'lon_LR',
                         'lat_LL', 'lon_LL']].loc[idx]
        return np.radians(sub.values.reshape((4, 2)))

    @staticmethod
    def _check_crossing(lon_list):
        """
        Checks if the antimeridian is crossed.
        lon_list has four elements: [lon_UL, lon_UR, lon_LR, lon_LL]
        which defines an image boundary.
        """
        return any(abs(pair[0] - pair[1]) >
                   180.0 for pair in itertools.combinations(lon_list, 2))

class Search(SpatialIndexL3):

    def mkgeojson(self):
        return


class SpatialIndexLS8(SpatialIndexL3):

    # We should test for antimeridian,
    # but disabling for now to test query function

    # def gen_geometries(self):
    #    """
    #    Create a polygon object for each LS8 grid point.
    #    If the polygon runs across the antimeridian, The polygon will be
    #    separated into two adjacent polygons along the antimeridian, and these
    #    two polygons will be grouped into a single MultiPolygon object.
    #    """
    #    geometry_collection = []
    #    for index, row in self.data.iterrows():
    #        lon_list = [row.lon_UL, row.lon_UR, row.lon_LR, row.lon_LL]
    #        if self._check_crossing(lon_list):
    #            set1 = [x % 360.0 for x in lon_list]
    #            set2 = [x % -360.0 for x in lon_list]
    #            poly1 = Polygon([(set1[0], row.lat_UL),
    #                             (set1[1], row.lat_UR),
    #                             (set1[2], row.lat_LR),
    #                             (set1[3], row.lat_LL)])
    #            poly2 = Polygon([(set2[0], row.lat_UL),
    #                             (set2[1], row.lat_UR),
    #                             (set2[2], row.lat_LR),
    #                             (set2[3], row.lat_LL)])
    #            feature_geometry = MultiPolygon([poly1, poly2])
    #        else:
    #            feature_geometry = Polygon([(row.lon_UL, row.lat_UL),
    #                                        (row.lon_UR, row.lat_UR),
    #                                        (row.lon_LR, row.lat_LR),
    #                                        (row.lon_LL, row.lat_LL)])
    #        geometry_collection.append(feature_geometry)

    #    return geometry_collection

    def query_pathrow(self, lat, lon):
        '''
        Query available LS8 Path/Row combinations for a point in [lon, lat].
        We use a two-step process:
        (1) a ball tree search for all of the LS8 center points that are
            within 0.05 radians (~2.85 degrees) from the query point.
        (2) a point-in-polygon search using the results from (1).

        input:
            points_geometry: 2-element list showing [lon, lat]
            self.footprint (polygon_data): the LS8 footprint (GeoDataFrame)
        output:
            selection_idx: index numbers for the right Path/Row.
        '''

        q = self.make_pts(lat, lon)

        pre_selection = self.tree.query_radius(q, r=0.05,
                                               return_distance=False)
        pre_selection_idx = pre_selection[0]
        pre_selection_idx.sort()
        polygon_pre_selection = self.data.loc[pre_selection_idx]

        # (2) Point-in-box
        # Does not work for complex polygons, but fine for footprints
        selection_idx = []
        for i, row in polygon_pre_selection.iterrows():
            if self.point_in_box(i, q):
                selection_idx.append(i)

        return Search(name=self.name, idx=selection_idx)
        # return selection_idx

    def search_s3(self, pr_idx):
        s3_pathrow = '{:03d}/{:03d}'.format(self.data.loc[pr_idx, 'path'],
                                            self.data.loc[pr_idx, 'row'])
        s3_prefix = 'c1/L8/' + s3_pathrow + '/LC08_L1TP_'
        # print(s3_prefix)

        # according to https://github.com/boto/boto3/issues/1200
        s3 = boto3.client('s3', region_name='us-west-2',
                          config=botocore.config.Config(
                            signature_version=botocore.UNSIGNED))

        # https://towardsdatascience.com/
        #        working-with-amazon-s3-buckets-with-boto3-785252ea22e0
        response = s3.list_objects_v2(Bucket="landsat-pds", MaxKeys=1000,
                                      Prefix=s3_prefix, Delimiter='/')

        scene_list = pd.DataFrame(columns=('prefix', 'time', 'tier'))
        scene_idx = 0

        if response.get('CommonPrefixes') is None:
            # print('No available scenes!')
            pass
        else:
            for scene in response.get('CommonPrefixes'):
                scene_prefix = scene.get('Prefix')
                # print(scene.get('Prefix'))
                timestamp = scene_prefix.split('_')[3]
                timestamp = datetime.strptime(timestamp, '%Y%m%d')
                timestamp = timestamp.date()
                tierstate = scene_prefix.split('_')[6][:-1]
                # print(timestamp, tierstate)
                scene_list.loc[scene_idx] = [scene_prefix,
                                             timestamp, tierstate]
                scene_idx += 1

        return s3_prefix, scene_list


class SpatialIndexITSLIVE(SpatialIndexL3):
    # modified from https://github.com/nasa-jpl/itslive
    @staticmethod
    def get_granule_urls(params):
        '''
        params example:
        params = {'polygon': '-50.0783,69.6975,-50.0783,69.6995,
                              -50.0763,69.6995,-50.0763,69.6975,
                              -50.0783,69.6975',
            'percent_valid_pixels': 1, 'start': '2017-08-29',
                                        'end': '2019-03-31'}
        '''
        base_url = 'https://nsidc.org/apps/itslive-search/velocities/urls'
        resp = requests.get(base_url, params=params, verify=False)
        return resp.json()

    @staticmethod
    def get_minimal_bbox(query_pt):
        """
        a very rough approximation of a small bbox less than 1km
        of a given lon-lat point

        params: geometry, a geojson point geometry
        """
        lon = query_pt[0]
        lat = query_pt[1]
        lon_offset = -0.001 if lon < 0.0 else 0.001
        lat_offset = -0.001 if lat < 0.0 else 0.001

        bbox = box(lon - lon_offset,
                   lat - lat_offset,
                   lon + lon_offset, lat + lat_offset)
        coords = [[str(float("{:.4f}".format(coord[0]))),
                   str(float("{:.4f}".format(coord[1])))]
                  for coord in bbox.exterior.coords]
        coords = list(itertools.chain.from_iterable(coords))
        return ','.join(coords)

    @staticmethod
    def parse_urls(urls):
        '''
        parse urls
        '''
        pr_dict = {}
        for url_dict in urls:
            file_name = os.path.basename(url_dict['url'])
            file_components = file_name.split('_')
            prstr = file_components[2]
            prstr = prstr[:3] + '/' + prstr[-3:]
            start_date = datetime.strptime(file_components[11],
                                           "%Y%m%d").date()
            end_date = datetime.strptime(file_components[3],
                                         "%Y%m%d").date()
            pair_days = end_date - start_date
            img1_tier = file_components[14]
            img2_tier = file_components[6]
            # For now let's show results using T1 images only
            if img1_tier != 'RT' and img2_tier != 'RT':
                # if prstr == '083/232':
                #     print(url_dict['url'])
                start_date_str = start_date.strftime('%Y-%m-%d')
                end_date_str = end_date.strftime('%Y-%m-%d')
                entrystr = ' / '.join((start_date_str,
                                       end_date_str,
                                       f'{pair_days.days} days'))
                pr_dict_entry = {'entrystr': entrystr, 'url': url_dict['url']}
                if prstr in pr_dict:
                    pr_dict[prstr].append(pr_dict_entry)
                else:
                    pr_dict[prstr] = [pr_dict_entry]

        for key in pr_dict:
            pr_dict[key].sort(key=lambda x: x.get('entrystr'))
        return pr_dict

    
class GeoStacksUI():
    
    def __init__(self, zoom=4, lon=-50.,lat=69., spatial_index=None):
        
        self.zoom = zoom
        self.lat = lat
        self.lon = lon
        self.mainmap = None
        self.marker = None
        self.idxs = None
        self.ui_title = None
        self.prlist = []
        self.menuleft = None     # path / row menu
        self.pr_selection = None
        self.map_polygon = None
        self.spatial_index = spatial_index
        self.record = None       # temporary attribute to store select spatial record
        self.output = None       # print message output (unused for now)
        self.results = None      # store results (unused for now)
        
    def init_panelleft(self):
        self.ui_title = iwg.HTML("<h2>Drag the marker to your region of interest</h2>")
        self.idxs = self.spatial_index.query_pathrow(self.lat,self.lon)
        self.prlist = [('{:03d}/{:03d}'.format(self.spatial_index.data.loc[i, 'path'], 
                                              self.spatial_index.data.loc[i, 'row' ]), i) for i in self.idxs.data.index]
        self.menuleft = iwg.Select(options=self.prlist, description='LS8 Path/Row:', rows=15)
        
    def init_map(self):
        self.mainmap = ilfl.Map(basemap=ilfl.basemaps.Gaode.Satellite,
                                center=[self.lat, self.lon], zoom=self.zoom)
        self.marker = ilfl.Marker(location=[self.lat, self.lon], draggable=True)
        self.mainmap.add_layer(self.marker)
        self.pr_selection = self.idxs.data.index[0]
        self.record = self.spatial_index.data.loc[self.pr_selection]
        self.map_polygon = Polygon(
            locations=[(self.record.lat_UL, self.record.lon_UL), (self.record.lat_UR, self.record.lon_UR), (self.record.lat_LR, self.record.lon_LR), (self.record.lat_LL, self.record.lon_LL)],
            color="blue")
        self.mainmap.add_layer(self.map_polygon)
        
    def gen_ui(self, spatial_index=None):
        if self.spatial_index is None:
            self.spatial_index = spatial_index
        
        self.init_panelleft()
        self.init_map()
        
        self.marker.observe(self._on_location_changed, 'location')
        self.menuleft.observe(self._on_menuleft_selection_changed, names='value')
        leftside = iwg.VBox([self.ui_title, self.menuleft])
        leftside.layout.align_items = 'center'
        return iwg.AppLayout(left_sidebar=leftside, center=self.mainmap)

    # ==== leftmenu update when map marker loc changes
    
    def _on_location_changed(self, event):
        # self.query_pt = [self.marker.location[-1], self.marker.location[0]]
        self.lat = self.marker.location[0]
        self.lon = self.marker.location[-1]
        self.idxs = self.spatial_index.query_pathrow(self.lat, self.lon)
        self.prlist = [('{:03d}/{:03d}'.format(self.spatial_index.data.loc[i, 'path'], 
                                               self.spatial_index.data.loc[i, 'row']), i) for i in self.idxs.data.index]
        self.menuleft.options = self.prlist
        
    # ==== map polygon update when leftmenu selection changes

    def _on_menuleft_selection_changed(self, change):
        self.pr_selection = change['new']
        self.record = self.spatial_index.data.loc[self.pr_selection]
        self.map_polygon.locations = [(self.record.lat_UL, self.record.lon_UL), 
                                      (self.record.lat_UR, self.record.lon_UR), 
                                      (self.record.lat_LR, self.record.lon_LR), 
                                      (self.record.lat_LL, self.record.lon_LL)]