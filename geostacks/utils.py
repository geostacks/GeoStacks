import numpy as np
import functools 

def bearing(lat1,lon1, lat2,lon2):
    """assumes lat/lon values are in decimal degrees
    Return is in degrees Clockwise from North"""
    lat1 = lat1*np.pi/180.
    lat2 = lat2*np.pi/180.
    lon1 = lon1*np.pi/180.
    lon2 = lon2*np.pi/180.
    # could probably just use np.radians instead...

    X = np.cos(lat2) * np.sin(lon2 - lon1)
    Y = np.cos(lat1) * np.sin(lat2) - np.sin(lat1)*np.cos(lat2)*np.cos(lon2-lon1)

    b = np.arctan2(X,Y)
    return(np.degrees(b))


def representation(center_lon,  # in radians
                   center_lat,  # in radians
                   instrument_tilt, # in degrees, rotation clockwise
                   len_lon=180, # extent in km
                   len_lat=185, # extent in km
                   R=6371):      # "radius" of earth

    tilt_deg = instrument_tilt * 2 * np.pi / 360

    x, y, z = (R * np.cos(center_lat) *
               np.sin(center_lon),
               R * np.cos(center_lat) *
               np.cos(center_lon), R * np.sin(center_lat))
    C = np.array([x,y,z]) # center of scene

    dlat, dlon = np.sin(-tilt_deg), np.cos(-tilt_deg)
    dir_lon = np.array([-np.sin(center_lat) * np.sin(center_lon) * dlat +
                       np.cos(center_lat) * np.cos(center_lon) * dlon,
                       -np.sin(center_lat) * np.cos(center_lon) * dlat -
                       np.cos(center_lat) * np.sin(center_lon) * dlon,
                       np.cos(center_lat) * dlat])
    dir_lon /= np.linalg.norm(dir_lon)

    A = len_lon / 2 / R
    midpt_1 = np.cos(A) * C + R * np.sin(A) * dir_lon

    dir_lat = np.cross(midpt_1, dir_lon)
    dir_lat /= np.linalg.norm(dir_lat)

    B = len_lat/ 2 / R

    corners = [np.cos(B) * midpt_1 + R * np.sin(B) * dir_lat]
    corners.append(np.cos(B) * midpt_1 - R * np.sin(B) * dir_lat)

    midpt_2 = np.cos(A) * C - R * np.sin(A) * dir_lon
    corners.append(np.cos(B) * midpt_2 + R * np.sin(B) * dir_lat)
    corners.append(np.cos(B) * midpt_2 - R * np.sin(B) * dir_lat)
    corners = np.array(corners)

    corners_lon_lat = np.array([(np.arctan2(x_ / R, y_ / R),
                                 np.arcsin(z_ / R)) for x_, y_, z_ in corners])

    # now work out halfspace

    # these are the edge segmentsin lon/lat space
    supports = [corners_lon_lat[0]-corners_lon_lat[1],
                corners_lon_lat[0]-corners_lon_lat[2],
                corners_lon_lat[1]-corners_lon_lat[3],
                corners_lon_lat[2]-corners_lon_lat[3]]

    # normals to each edge segment
    normals = np.array([(s[1],-s[0]) for s in supports])
    pts = [corners_lon_lat[0],   # a point within each edge
           corners_lon_lat[0],
           corners_lon_lat[1],
           corners_lon_lat[3]]
    bdry_values = np.array([np.sum(n * p) for n, p in zip(normals, pts)])
    center_values = [np.sum(n * [center_lon, center_lat]) for n in normals]
    center_signs = np.sign(center_values - bdry_values)

    def _check(normals, center_signs, bdry_values, lon_lat_vals):
        normal_mul = np.asarray(lon_lat_vals).dot(normals.T)
        values_ = normal_mul - bdry_values[None,:]
        signs_ = np.sign(values_) * center_signs[None,:]
        return np.squeeze(np.all(signs_ == 1, 1))

    _check = functools.partial(_check, normals, center_signs, bdry_values)

    return corners_lon_lat, _check, normals, bdry_values, center_signs

