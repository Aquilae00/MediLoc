import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MarkerAdderService } from '../../services/marker-adder.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.css'],
  providers: [MarkerAdderService, ClientService]
})
export class SingleInputComponent implements OnInit {

  latitude: string;
  longitude: string;
  population: string;

  constructor(private ref: DynamicDialogRef, private markerAdder: MarkerAdderService, private client: ClientService) { }

  ngOnInit(): void {
  }

  setFields() {
    this.markerAdder.addMarker(parseInt(this.latitude),parseInt(this.longitude));
    this.client.addVillage(parseInt(this.population),parseInt(this.latitude),parseInt(this.longitude)).subscribe(data => console.log(data));
    this.ref.close();
  }

}
