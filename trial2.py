import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

df = pd.read_csv("data.csv")

"""
df = pd.DataFrame({
    'x': [...],
    'y': [...]
})
"""

kmeans = KMeans(n_clusters=15)
kmeans.fit(df)

labels = kmeans.predict(df)
centroids = kmeans.cluster_centers_


fig = plt.figure(figsize=(5, 5))

plt.scatter(df['x'], df['y'], color='blue', alpha=0.5, edgecolor='k')
for idx, centroid in enumerate(centroids):
    plt.scatter(*centroid, color='orange')
plt.show()
