import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { MatSliderModule } from '@angular/material/slider';
import { TestListComponent } from './test-list/test-list.component';
import { MatListModule} from '@angular/material/list';
import { GButtonComponent } from './g-button/g-button.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { MoreBarComponent } from './more-bar/more-bar.component';
import { MobileControllerComponent } from './mobile-controller/mobile-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    GButtonComponent,
    MobileFooterComponent,
    MoreBarComponent,
    MobileControllerComponent
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
