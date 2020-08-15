from villages import Village
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

"""
INPUTS:
 1. coordinates of villages
 2. population of villages
 3. number of centers
 4. number of workers
OUTPUTS:
 1. coordinates of centers
 2. center indicator (which villages are under which center's outreach)
 3. number of workers in each center
 """


## Variables ##
CENTROIDS = 15  # number of centers
MANPOWER = 60  # number of workers
#X-COORDINATES = []
#Y-COORDINATES = []
POPULATION = [1]*5000

coordinates = pd.read_csv("Book3.csv")  # DELETE THIS LATER

"""
coordinates = pd.DataFrame({
    'x': X-COORDINATES,
    'y': Y-COORDINATES
})

df = pd.DataFrame({
    'x': X-COORDINATES,
    'y': Y-COORDINATES,
    'population': POPULATION,
    'centroid-id': [0]*len(df)
})
"""

df = pd.DataFrame({
    'x': coordinates['x'],
    'y': coordinates['y'],
    'population': POPULATION,
    'centroid-id': [0]*len(coordinates)
})


kmeans = KMeans(n_clusters=CENTROIDS)
kmeans.fit(coordinates)

labels = kmeans.predict(coordinates)  # determines which points are assigned to each centroid
centroids = kmeans.cluster_centers_  # returns list containing x-y coordinates (in list) of centroids

centroidx = []
centroidy = []

for i in range(CENTROIDS):
    centroidx.append(centroids[i][0])
    centroidy.append(centroids[i][1])

centers = pd.DataFrame({
    'x': centroidx,
    'y': centroidy,
    'centroid-id': list(dict.fromkeys(labels)),
    'manpower': [1]*len(centroids)
})

centers.sort_values("centroid-id", axis = 0, ascending = True, inplace = True, na_position ='last')


##to be updated##
df['centroid-id'] = labels


##population calculations##
organizedvillages = []
for i in range(CENTROIDS):
    cluster = []
    for j in range(len(df)):
        if df['centroid-id'][j] == i:
            cluster.append(df['population'][j])
    organizedvillages.append(cluster)

totalpop = df['population'].sum()

manpower = []
for i in range(CENTROIDS):
    ratio = sum(organizedvillages[i])/totalpop
    manpower.append(round(ratio*MANPOWER))

centers['manpower'] = manpower


# OUTPUT 1: centers['x'] & centers['y']
# OUTPUT 2: centers['centroid-id']
# OUTPUT 3: centers['manpower']
