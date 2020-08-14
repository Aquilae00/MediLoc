import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CenterCreatorComponent } from '../center-creator/center-creator.component';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  providers: [DialogService]
})
export class MenubarComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private dialogService: DialogService) { }

  openCenterCreator() {
    const ref = this.dialogService.open(CenterCreatorComponent, {
      header: 'Enter',
      width: '70%'
    })
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
