import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkerAdderService {

  constructor() { }
  marker: Marker = {
    lat: 51.55903,
    lng: 0.155831
  }

  location: Location = {
    latitude: 51.55903,
    longitude: 0.155831,
    mapType: "satelite",
    zoom: 5,
    markers: [
      this.marker,
    ]
  };

  addMarker(lat: number, lng: number) {
    this.location.markers.push({
      lat,
      lng
    })
    console.log('added');
  }

  getLocation() {
    return this.location;
  }
}


interface Marker {
  lat: number;
  lng: number;
}

interface Location {
  latitude: number;
  longitude: number;
  mapType: string;
  zoom: number;
  markers: Array<Marker>;
}