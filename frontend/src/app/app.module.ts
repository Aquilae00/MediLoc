import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { RunComponent } from './components/run/run.component';
import { RunPopUpComponent } from './components/run-pop-up/run-pop-up.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { VillageInputComponent } from './components/village-input/village-input.component';
import { SingleInputComponent } from './components/single-input/single-input.component'
import { GoogleMapsService } from './services/google-maps.service';

@NgModule({
  declarations: [
    AppComponent,
    CenterCreatorComponent,
    MenubarComponent,
    MapComponent,
    RunComponent,
    RunPopUpComponent,
    VillageInputComponent,
    SingleInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    DynamicDialogModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    GoogleMapsModule
  ],
  bootstrap: [AppComponent],
  providers: [GoogleMapsService],
  entryComponents: [
    CenterCreatorComponent,
    RunPopUpComponent
  ]
})
export class AppModule { }
