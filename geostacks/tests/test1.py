from geostacks import SpatialIndexLS8

def test1():
    ls8 = SpatialIndexLS8()
    idxs = ls8.query_pathrow(69, -50)   # lat, lon
    assert len(idxs.data.index) == 10 or len(idx) == 10   # should find 10 matches