
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MapComponent } from '../map/map.component';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Village } from 'src/app/interfaces/interface-importer';
import { GoogleMapsService } from 'src/app/services/google-maps.service';


/**
 * @author: Brian Linaldi
 */
@Component({
  selector: 'app-run-pop-up',
  templateUrl: './run-pop-up.component.html',
  styleUrls: ['./run-pop-up.component.css']
})
export class RunPopUpComponent implements OnInit {

  centerNum: string;
  manpower: string;
  villages: Village[];
  constructor(private client: ClientService, private ref: DynamicDialogRef,private config: DynamicDialogConfig,
    private googleMaps: GoogleMapsService) { }

  ngOnInit(): void {
    this.villages = this.config.data.villages;
  }

  run(): void {
    const latitudes: number[] = [];
    const longitudes: number[] = [];
    const populations: number[] = [];

    this.villages.forEach((village: Village) => {
      longitudes.push(village.marker.getPosition().lng());
      latitudes.push(village.marker.getPosition().lat());
      populations.push(village.population);

    });
    this.client.run2(longitudes,latitudes,populations,parseInt(this.centerNum),parseInt(this.manpower)).subscribe( data => {
      data.forEach( d => {
        // console.log(d)
        const latLng = new google.maps.LatLng(d.y,d.x);
        const marker = this.googleMaps.generateMarker(latLng);
        marker.setIcon("assets/img/pin_1.png");
      })
    });
    this.ref.close();
  }
}