import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { MatSliderModule } from '@angular/material/slider';
import { TestListComponent } from './test-list/test-list.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbStepperModule,
    AppRoutingModule,
    MatSliderModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
