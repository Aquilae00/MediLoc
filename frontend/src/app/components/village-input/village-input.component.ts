import { Component, OnInit, Input, Output } from '@angular/core';
import { OriginDisplay } from 'src/app/interfaces/interface-importer';

@Component({
  selector: 'app-village-input',
  templateUrl: './village-input.component.html',
  styleUrls: ['./village-input.component.css']
})
export class VillageInputComponent implements OnInit {

  @Input()
  originDisplay: OriginDisplay;

  // originDisplay: OriginDisplay;
  constructor() { }

  ngOnInit(): void {
    // this.originDisplay = this.inputOriginDisplay;
  }

}
