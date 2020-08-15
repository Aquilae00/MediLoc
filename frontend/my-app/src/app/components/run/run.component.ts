import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { RunPopUpComponent } from '../run-pop-up/run-pop-up.component';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css'],
  providers: [DialogService]
})
export class RunComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private dialogService: DialogService) { }

  openrunpopup() {
    const ref = this.dialogService.open(RunPopUpComponent, {
      header: 'Create Centers',
      width: '40%'
    })
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  }
