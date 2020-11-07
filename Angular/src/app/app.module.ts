import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule, NbCheckboxModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { MatSliderModule } from '@angular/material/slider';
import { TestListComponent } from './test-list/test-list.component';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { TVGridComponent } from './components/tvgrid/tvgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    HeaderComponent,
    TVGridComponent
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
    MatListModule,
    NbCheckboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
