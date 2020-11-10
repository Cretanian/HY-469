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
import { TvgridListComponent } from './components/tvgrid-list/tvgrid-list.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ParticipantTVComponent } from './participant-tv/participant-tv.component';
import { ParticipantsTVComponent } from './participants-tv/participants-tv.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { ContactListComponent } from './components/contacts/contact-list/contact-list.component';
import { ContactSectionComponent } from './components/contacts/contact-section/contact-section.component';
import { ContactSectionListComponent } from './components/contacts/contact-section-list/contact-section-list.component';
import { EmptyComponent } from './components/activities/empty/empty.component';
import { TableParticipantsComponent } from './components/table-participants/table-participants/table-participants.component';
import { TableParticipantComponent } from './components/table-participants/table-participant/table-participant.component';
import { TableFooterComponent } from './components/table-utilComponents/table-footer/table-footer.component';
import { NavigationButtonsComponent } from './components/table-participants/navigation-buttons/navigation-buttons.component';
import { ParticipantsWindowComponent } from './components/table-participants/participants-window/participants-window.component';
import { OptionsButtonsComponent } from './components/table-participants/options-buttons/options-buttons.component';
import { ActivityComponent } from './components/activities/activity/activity.component';
import { ActivityMessageComponent } from './components/activities/activity-message/activity-message.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    HeaderComponent,
    TVGridComponent,
    TvgridListComponent,
    ParticipantComponent,
    ParticipantsComponent,
    ParticipantTVComponent,
    ParticipantsTVComponent,
    ContactComponent,
    ContactListComponent,
    ContactSectionComponent,
    ContactSectionListComponent,
    EmptyComponent,
    TableParticipantsComponent,
    TableParticipantComponent,
    TableFooterComponent,
    NavigationButtonsComponent,
    ParticipantsWindowComponent,
    OptionsButtonsComponent,
    ActivityComponent,
    ActivityMessageComponent
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
