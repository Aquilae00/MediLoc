import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.css']
})
export class SingleInputComponent implements OnInit {

  input: string;
  constructor() { }

  ngOnInit(): void {
  }

}
