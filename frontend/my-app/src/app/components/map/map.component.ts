import { Component, OnInit } from '@angular/core';
import { MarkerManager, AgmMarker } from '@agm/core';
import { CovidCountryService } from '../../services/covid-country.service';
import { SingleInputComponent } from '../single-input/single-input.component';
import { DialogService } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [DialogService]
})
export class MapComponent implements OnInit {

  data = [{
    "Country": "Switzerland",
    "CountryCode": "CH",
    "Lat": "46.82",
    "Lon": "8.23",
    "Cases": 0,
    "Status": "confirmed",
    "Date": "2020-01-22T00:00:00Z"
  },
  {
    "Country": "Switzerland",
    "CountryCode": "CH",
    "Lat": "46.82",
    "Lon": "8.23",
    "Cases": 0,
    "Status": "confirmed",
    "Date": "2020-01-23T00:00:00Z"
  }];

  location: Location;
  constructor(
    private markerManager: MarkerManager,
    private covidCountryService: CovidCountryService,
    private dialogService: DialogService

  ) { }

  ngOnInit() {
    this.location = {
      latitude: 51.55903,
      longitude: 0.155831,
      mapType: "satelite",
      zoom: 5,
      markers: [
      ]
    }
    
    this.covidCountryService.collect().subscribe(data => {
      data.data.forEach(d => {
        console.log(d);
        this.addMarker(parseInt(d.la),parseInt(d.lo));
        console.log(parseInt(d.Lat));
      });

    })
  }

  addMarker(lat: number, lng: number) {
    this.location.markers.push({
      lat,
      lng
    })
  }

  addMarkerClick() {
    this.dialogService.open(SingleInputComponent,{
      header: 'Enter',
      width: '70%'
    })
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