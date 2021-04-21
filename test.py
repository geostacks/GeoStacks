from geostacks import SpatialIndexLS8

ls8_index = SpatialIndexLS8('./LS8_cornerPts.xlsx')
ls8_index.read()
print(ls8_index.footprint)
print('------------------')

query_pt = [-50., 69.]
idxs = ls8_index.query_pathrow(query_pt)
print(ls8_index.footprint.loc[idxs])