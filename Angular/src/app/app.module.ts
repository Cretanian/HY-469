import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule, NbSidebarModule, NbButtonModule, NbSelectModule, NbCardModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { MatButtonModule } from '@angular/material/button';
import { TeamsButtonComponent } from './teams-button/teams-button.component';

import { OnlineDevicesComponent } from './online-devices/online-devices.component';

import { FormsModule } from '@angular/forms';
import { VolumeSliderComponent } from './volume-slider/volume-slider.component';
import { GenericVolumeEditorComponent } from './generic-volume-editor/generic-volume-editor.component';

import { TvSpeakerComponent } from './tv-speaker/tv-speaker.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsButtonComponent,
    OnlineDevicesComponent,
    VolumeSliderComponent,
    GenericVolumeEditorComponent,
    TvSpeakerComponent
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
    NbSelectModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
