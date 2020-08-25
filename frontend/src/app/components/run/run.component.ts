import { Component, OnInit, Input } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { RunPopUpComponent } from '../run-pop-up/run-pop-up.component';
import { Village } from 'src/app/interfaces/interface-importer';

/**
 * @author: Brian Linaldi
 */
@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css'],
  providers: [DialogService]
})
export class RunComponent implements OnInit {
  @Input() 
  villages: Village[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private dialogService: DialogService) { }

  openRunPopup() {
    // console.log(this.villages);
    const ref = this.dialogService.open(RunPopUpComponent, {
      data: {
        villages: this.villages
      },
      header: 'Create Centers',
      width: '60%'
    })
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  }