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
import { FormsModule } from '@angular/forms';


import { MenuItem } from 'primeng/api';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MapComponent } from './components/map/map.component';                  //api
import { MarkerManager } from '@agm/core';
import { SingleInputComponent } from './components/single-input/single-input.component';
import { RunComponent } from './components/run/run.component';
import { RunPopUpComponent } from './components/run-pop-up/run-pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    CenterCreatorComponent,
    MenubarComponent,
    MapComponent,
    SingleInputComponent,
    RunComponent,
    RunPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // "apiKey": "AIzaSyD_muun5_t4Zy1veBnqQ3HpMe7r9NE7bII"
    }),
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    DynamicDialogModule,
    HttpClientModule,
    InputTextModule,
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