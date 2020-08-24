import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

## Variables ##
CENTROIDS =
X-COORDINATES = []
Y-COORDINATES = []

df = pd.read_csv("Book3.csv")  # DELETE THIS LATER

"""
df = pd.DataFrame({
    'x': X-COORDINATES,
    'y': Y-COORDINATES
})
"""

kmeans = KMeans(n_clusters=CENTROIDS)
kmeans.fit(df)

labels = kmeans.predict(df)  # determines which points are assigned to each centroid
centroids = kmeans.cluster_centers_  # returns list containing x-y coordinates (in list) of centroids


## DELETE BELOW LATER ##
fig = plt.figure(figsize=(5, 5))

plt.scatter(df['x'], df['y'], color='blue', alpha=0.5, edgecolor='k')
for idx, centroid in enumerate(centroids):
    plt.scatter(*centroid, color='orange')
plt.show()