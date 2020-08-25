import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

/**
 * @author Brian Linaldi
 */
@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.css']
})
export class SingleInputComponent implements OnInit {

  population: string;
  constructor(private ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  set() {
    this.ref.close(parseInt(this.population));
  }
}
