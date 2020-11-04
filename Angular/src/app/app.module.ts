import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { testme } from './test.compoment';
import { SteliosComponent } from './stelios/stelios.component';
import { steliosservice } from './stelios/stelios.service';

@NgModule({
  declarations: [
    AppComponent,
    testme,
    SteliosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    steliosservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 