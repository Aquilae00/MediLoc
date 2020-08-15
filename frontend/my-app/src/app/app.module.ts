import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterCreatorComponent } from './components/center-creator/center-creator.component';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';


import { MenuItem } from 'primeng/api';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MapComponent } from './components/map/map.component';                  //api
import { MarkerManager } from '@agm/core';
import { SingleInputComponent } from './components/single-input/single-input.component';
import { RunComponent } from './components/run/run.component';
import { RunPopUpComponent } from './components/run-pop-up/run-pop-up.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterCreatorComponent,
    MenubarComponent,
    MapComponent,
    SingleInputComponent,
    RunComponent,
    RunPopUpComponent,
    InfoBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({

    }),
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    DynamicDialogModule,
    HttpClientModule,
    InputTextModule,
    InputNumberModule,
    FormsModule
  ],
  providers: [MarkerManager,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
  entryComponents: [
    CenterCreatorComponent,
    SingleInputComponent,
    RunPopUpComponent
  ]
})
export class AppModule { }
