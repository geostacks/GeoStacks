from geostacks.utils import representation, bearing
import pandas as pd
import numpy as np

# Reference data for test
ls8 = pd.read_excel('../LS8_cornerPts.xlsx')


# Calculate Bearing per Row as Average
# Note that the `asending` and `dsending` varibles refer to direction of the
# moving window with regard to bearing calculation, ***not*** asending/desending
# paths of the satellite orbit

asending = bearing(ls8.lat_CTR[248:497].values, ls8.lon_CTR[248:497].values, 
                   ls8.lat_CTR[247:496].values, ls8.lon_CTR[247:496].values)

# 180 degree offset
dsending = bearing(ls8.lat_CTR[247:496].values, ls8.lon_CTR[247:496].values,
                   ls8.lat_CTR[248:497].values, ls8.lon_CTR[248:497].values) + 180.

means = np.mean([asending[0:-1], dsending[1:]], axis=0)
# Replace invalid first value with non-averaged valid value
means[0] = dsending[1]
# Same for last, but on other array
means[-1] = asending[-2]

# Length is 248, although we'll test a smaller range to be forgiving at extreme lats

def get_corners(i):
    corners = np.zeros((4,2))
    row = ls8[i:i+1]
    corners[0,1] = row.lat_UL.values
    corners[1,1] = row.lat_UR.values
    corners[2,1] = row.lat_LL.values
    corners[3,1] = row.lat_LR.values
    corners[0,0] = row.lon_UL.values
    corners[1,0] = row.lon_UR.values
    corners[2,0] = row.lon_LL.values
    corners[3,0] = row.lon_LR.values
    return corners

def compare(idx):
    ref = get_corners(idx)
    scene = ls8[idx:idx+1]
    corners, contains, _, _, _ = representation(np.radians(scene.lon_CTR.values)[0], 
                                            np.radians(scene.lat_CTR.values)[0], 
                                            means[scene.row.values -1][0],
                                            185, 180)
    calc = np.degrees(corners)
    lat_error, lon_error = np.mean(np.abs(ref[ref[:,0].argsort()] - 
                                   calc[calc[:,0].argsort()]), axis=0)
    return lat_error, lon_error

# Actual test

def test_bounding():
    lats, lons = [], []
    for i in range(19,100):
        lat, lon = compare(i)
        lats.append(lat), lons.append(lon)

    assert (np.array(lats) < 0.01).all() == True
    assert (np.array(lons) < 0.01).all() == True

