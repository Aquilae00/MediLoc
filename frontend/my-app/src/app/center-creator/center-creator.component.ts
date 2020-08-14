import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-center-creator',
  templateUrl: './center-creator.component.html',
  styleUrls: ['./center-creator.component.css']
})
export class CenterCreatorComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
