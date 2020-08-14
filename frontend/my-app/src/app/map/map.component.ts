import { Component, OnInit } from '@angular/core';
import { MarkerManager } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {


  constructor(
  ) { }


  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {
  }

}
