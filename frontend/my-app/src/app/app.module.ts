import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterCreatorComponent } from './center-creator/center-creator.component';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';



import { MenuItem } from 'primeng/api';
import { MenubarComponent } from './menubar/menubar.component';
import { MapComponent } from './map/map.component';                  //api

@NgModule({
  declarations: [
    AppComponent,
    CenterCreatorComponent,
    MenubarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
    }),
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    DynamicDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CenterCreatorComponent
  ]
})
export class AppModule { }
