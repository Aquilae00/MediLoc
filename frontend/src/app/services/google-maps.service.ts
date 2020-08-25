import { Injectable, OnInit, ViewChild } from '@angular/core';
import { MapsMarkerService } from './maps-marker.service';

/**
 * @author Brian Linaldi
 */
@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  @ViewChild('map', { static: true }) mapElement: any;

  map: google.maps.Map;
  constructor(private mapsMarker: MapsMarkerService) { }

  setMap(map: google.maps.Map) {
    this.map = map;
  }
  getMap(): google.maps.Map {
    return this.map;
  }
  generateMarker(latLng: google.maps.LatLng): google.maps.Marker {
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    return marker;
  }
}
