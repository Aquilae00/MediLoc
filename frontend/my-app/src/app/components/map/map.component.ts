import { Component, OnInit } from '@angular/core';
import { MarkerManager, AgmMarker } from '@agm/core';
import { CovidCountryService } from '../../services/covid-country.service';
import { SingleInputComponent } from '../single-input/single-input.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MarkerAdderService } from '../../services/marker-adder.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [DialogService, MarkerAdderService]
})
export class MapComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private markerAdder: MarkerAdderService,
    private client: ClientService
  ) { }

  marker: Marker = {
    lat: 51.55903,
    lng: 0.155831
  }

  center: Marker[];
  location: Location = this.markerAdder.getLocation();

  ngOnInit() {
    this.client.getVillages().subscribe(data => {
      data.forEach(d => {
        this.location.markers.push({
          lat: d.latitude,
          lng: d.longitude
        })

      });
    }
    );


    // this.covidCountryService.collect().subscribe(data => {
    //   data.data.forEach(d => {
    //     console.log(d);
    //     this.addMarker(parseInt(d.la),parseInt(d.lo));
    //     console.log(parseInt(d.Lat));
    //   });

    // })
  }



  addMarkerClick(event: any): void {
    const ref = this.dialogService.open(SingleInputComponent, {
      header: 'Enter',
      width: '80%'
    })

    ref.onClose.subscribe(any => this.refresh())

    // console.log(event.latLng.lat);
    // console.log(event.latLng.lng);

    // console.log(event.latLng);

  }

  refresh() {
    this.client.getVillages().subscribe(data => {
      data.forEach(d => {
        this.location.markers.push({
          lat: d.latitude,
          lng: d.longitude
        })
      });
    }
    );

    this.client.get_centers().subscribe(data => {
      data.forEach(d => {
        this.center.push(
          {
            lat: d.y,
            lng: d.x
          }
        )
      })
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