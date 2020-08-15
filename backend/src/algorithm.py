import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

def run(XCOORDINATES, YCOORDINATES, POPULATION, CENTROIDS, MANPOWER):
    ##CREATE VILLAGE DATAFRAME##
    VILLAGES = pd.DataFrame({
        'x': XCOORDINATES,
        'y': YCOORDINATES,
    })

    kmeans = KMeans(n_clusters=CENTROIDS)
    kmeans.fit(VILLAGES)

    labels = kmeans.predict(VILLAGES)  # determines which points are assigned to each centroid

    VILLAGES['colorID'] = labels
    VILLAGES['population'] = POPULATION
    ##VILLAGE DATAFRAME COMPLETE##

    ##CREATE CENTERS DATAFRAME##
    centroids = kmeans.cluster_centers_  # returns list containing x-y coordinates (in list) of centroids

    centroidx = []
    centroidy = []

    for i in range(CENTROIDS):
        centroidx.append(centroids[i][0])
        centroidy.append(centroids[i][1])

    CENTERS = pd.DataFrame({
        'x': centroidx,
        'y': centroidy,
        'colorID': list(dict.fromkeys(labels))
    })

    ##manpower calculations based on population##
    organizedvillages = []
    for i in CENTERS['colorID']:
        cluster = []
        for j in range(len(VILLAGES)):
            if VILLAGES['colorID'][j] == i:
                cluster.append(VILLAGES['population'][j])
        organizedvillages.append(cluster)

    totalpop = VILLAGES['population'].sum()

    manpower = []
    for i in range(CENTROIDS):
        ratio = sum(organizedvillages[i])/totalpop
        manpower.append(round(ratio*MANPOWER))

    CENTERS['manpower'] = manpower

    ##CENTERS DATAFRAME COMPLETE##

    return [VILLAGES, CENTERS]

"""
XCOORDINATES = [1,2,3,4,5,6,7,8,9]
YCOORDINATES = [9,8,7,6,5,4,3,2,1]
POPULATION = [12,21,34,54,67,32,10,67,34]
CENTROIDS = 3
MANPOWER = 30

run(XCOORDINATES, YCOORDINATES, POPULATION, CENTROIDS, MANPOWER)
"""
