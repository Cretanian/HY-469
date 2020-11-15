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
import { ChatMessegesComponent } from './chat-messeges/chat-messeges.component';
import { FilesComponent } from './files/files.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';

import { TVIncomingCallComponent } from './tv-incoming-call/tv-incoming-call.component';
import { CallendaEventWallComponent } from './callenda-event-wall/callenda-event-wall.component';
import { UpcomingEventsItemComponent } from './upcoming-events-item/upcoming-events-item.component';
import { GenericUpcomingEventsBackgroundComponent } from './generic-upcoming-events-background/generic-upcoming-events-background.component';
import { TodaysEventsComponent } from './todays-events/todays-events.component';
import { FDisplayUpcomingEventsComponent } from './f-display-upcoming-events/f-display-upcoming-events.component';
import { CallendarHeadComponent } from './callendar-head/callendar-head.component';
import { FinalCalendarComponent } from './final-calendar/final-calendar.component';
import { TvCamerasWallComponent } from './tv-cameras-wall/tv-cameras-wall.component';
import { Tv3mainComponent } from './tv3main/tv3main.component';
import { Tv1mainComponent } from './tv1main/tv1main.component';
import { Screenshare1mainComponent } from './screenshare1main/screenshare1main.component';
import { Tv3x3mainComponent } from './tv3x3main/tv3x3main.component';
import { TvChatOnComponent } from './tv-chat-on/tv-chat-on.component';
import { FOnlineDivicesComponent } from './f-online-divices/f-online-divices.component';
import { FTeamsComponent } from './f-teams/f-teams.component';
import { GenDayCalendarComponent } from './gen-day-calendar/gen-day-calendar.component';
import { FCalendarPhoneComponent } from './f-calendar-phone/f-calendar-phone.component';
import { DaysCalendarListComponent } from './days-calendar-list/days-calendar-list.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { FChatComponent } from './f-chat/f-chat.component';
import { FilesListComponent } from './files-list/files-list.component';
import { FFilesComponent } from './f-files/f-files.component';
import { OutAudioComponent } from './in/out-audio/out-audio.component';
import { GenericHeaderItemComponent } from './generic-header-item/generic-header-item.component';
import { AudioSettingsCameraComponent } from './audio-settings-camera/audio-settings-camera.component';
import { CameraSettingsComponent } from './camera-settings/camera-settings.component';
import { ParticipantsSettingsComponent } from './participants-settings/participants-settings.component';
import { FCallSettingsComponent } from './f-call-settings/f-call-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsButtonComponent,
    OnlineDevicesComponent,
    VolumeSliderComponent,
    GenericVolumeEditorComponent,
    TvSpeakerComponent,
    ChatMessegesComponent,
    FilesComponent,
    CalendarEventComponent,
    TVIncomingCallComponent,
    CallendaEventWallComponent,
    UpcomingEventsItemComponent,
    GenericUpcomingEventsBackgroundComponent,
    TodaysEventsComponent,
    FDisplayUpcomingEventsComponent,
    CallendarHeadComponent,
    FinalCalendarComponent,
    TvCamerasWallComponent,
    Tv3mainComponent,
    Tv1mainComponent,
    Screenshare1mainComponent,
    Tv3x3mainComponent,
    TvChatOnComponent,
    FOnlineDivicesComponent,
    FTeamsComponent,
    GenDayCalendarComponent,
    FCalendarPhoneComponent,
    DaysCalendarListComponent,
    ChatListComponent,
    FChatComponent,
    FilesListComponent,
    FFilesComponent,
    OutAudioComponent,
    GenericHeaderItemComponent,
    AudioSettingsCameraComponent,
    CameraSettingsComponent,
    ParticipantsSettingsComponent,
    FCallSettingsComponent
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
