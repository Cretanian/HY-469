import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule,NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';


import {MatButtonModule} from '@angular/material/button';
import { TeamsButtonComponent } from './teams-button/teams-button.component';

import { OnlineDevicesComponent } from './online-devices/online-devices.component';
import { CallSetingsComponent } from './call-setings/call-setings.component';
import { FormsModule } from '@angular/forms';
import { VolumeSliderComponent } from './volume-slider/volume-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsButtonComponent,
    OnlineDevicesComponent,
    CallSetingsComponent,
    VolumeSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbStepperModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
