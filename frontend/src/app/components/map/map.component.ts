import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientService } from '../../services/client.service';
import { Village } from '../../interfaces/interface-importer';
import { Position } from '../../interfaces/interface-importer';
import { SingleInputComponent } from '../single-input/single-input.component';
import { MapMarker } from '@angular/google-maps';
import { MapInfoWindow } from '@angular/google-maps';
import { GoogleMap } from '@angular/google-maps';
import { MapAnchorPoint } from '@angular/google-maps';
import { GoogleMapsService} from '../../services/google-maps.service'
/**
 * @author: Brian Linaldi
 */
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [DialogService]
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: any;


  infowindow = new google.maps.InfoWindow();

  villages: Village[] = [];
  popup: boolean = false;
  map: google.maps.Map;
  
  constructor(private dialogService: DialogService,
    private googleMaps: GoogleMapsService
  ) { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.googleMaps.setMap(this.map);
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.placeMarker(event);
    })
  }

  placeMarker(event: google.maps.MouseEvent) {
    let elat = event.latLng.lat();
    let elng = event.latLng.lng();
    // console.log(elat, elng);
    let ref = this.dialogService.open(SingleInputComponent, {
      header: 'Create Centers',
      width: '60%'
    }).onClose.subscribe((pop: number) => {
      // console.log("REEE");
      const marker = this.googleMaps.generateMarker(event.latLng);
      marker.addListener('click', () => {
        this.infowindow.setContent(`population: ${pop}`);
        this.infowindow.open(this.map,marker);
      })
      this.villages.push({
        marker: marker,
        population: pop
      })
    })
  }


  // display(e: MouseEvent) {
  //   this.popup = true;
  //   const popupHeight = 400, // hardcode these values
  //     popupWidth = 300;    // or compute them dynamically

  //   let popupXPosition,
  //     popupYPosition

  //   if (e.clientX + popupWidth > window.innerWidth) {
  //     popupXPosition = e.pageX - popupWidth;
  //   } else {
  //     popupXPosition = e.pageX;
  //   }

  //   if (e.clientY + popupHeight > window.innerHeight) {
  //     popupYPosition = e.pageY - popupHeight;
  //   } else {
  //     popupYPosition = e.pageY;
  //   }

  //   this.originDisplay = {
  //     position: "absolute",
  //     left: popupXPosition,
  //     right: popupYPosition
  //   }
  // }
}