
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MapComponent } from '../map/map.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-run-pop-up',
  templateUrl: './run-pop-up.component.html',
  styleUrls: ['./run-pop-up.component.css']
})
export class RunPopUpComponent implements OnInit {

  centerNum: string;
  manpower: string;
  constructor(private client: ClientService, private ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  run(): void {
    this.client.run(parseInt(this.centerNum),parseInt(this.manpower)).subscribe(data=> {
      console.log(data)
    })
    this.ref.close();
  }
}