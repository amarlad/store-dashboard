# -*- coding: utf-8 -*-
"""
Created on Fri Feb  1 20:00:56 2019

@author: amar.lad
"""

import csv
import os
import sys

from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="store_latitude_longitude")
BASEDIR = "C:/Users/amar.lad/Desktop/Sephora" 

csvfile = open(os.path.join(BASEDIR, 'locationAddress.csv'))
sys.stdout = open('y_store_latitude_longitude.txt','wt')

reader = csv.reader(csvfile)
next(reader, None)

keywords = ["SUITE", "SPACE", "STORE", "UNIT", "BLDG", "STE"]

for row in reader:
    string = ' '
    if not any(keyword in row[1] for keyword in keywords):
        if any(c.isdigit() for c in row[1]):
            string += row[1] + ','
    if (not any(keyword in row[2] for keyword in keywords) and row[2]):
        string += row[2] + ','
    if (not any(keyword in row[3] for keyword in keywords) and row[3]):
        string += row[3] + ','
    string += row[4] + ',' + row[5] + ',' + row[6][:5] + ',' + row[7]
#    print(row[0])
#    print(string)
    location = geolocator.geocode(string, timeout=20)
    if location:
        a = '}, {'
        b = '   ' + 'position: new google.maps.LatLng(' + repr(location.latitude) + ',' + repr(location.longitude) + '),'
        c = "    type: 'info'"
        print(a)
        print(b)
        print(c)
#        print(row[0])
#        print(string)