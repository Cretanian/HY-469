import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TestListComponent } from './test-list/test-list.component';
import { MatListModule} from '@angular/material/list';
import { GButtonComponent } from './g-button/g-button.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { MoreBarComponent } from './more-bar/more-bar.component';
import { MobileControllerComponent } from './mobile-controller/mobile-controller.component';
import { MobileControllerMoreComponent } from './mobile-controller-more/mobile-controller-more.component';
import { MessageExtraComponent } from './message-extra/message-extra.component';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { TableMenuCarouselComponent } from './table-menu-carousel/table-menu-carousel.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { ConversationPreviewComponent } from './conversation-preview/conversation-preview.component';
import { ConversationMessagePreviewComponent } from './conversation-message-preview/conversation-message-preview.component';
import { EmojiCounterComponent } from './emoji-counter/emoji-counter.component';
import { MobileChatComponent } from './mobile-chat/mobile-chat.component';
import { MobileMessageLeftComponent } from './mobile-message-left/mobile-message-left.component';
import { MobileMessageComponent } from './mobile-message/mobile-message.component';
import { MobileChatBarComponent } from './mobile-chat-bar/mobile-chat-bar.component';
import { MobileTeamMoreComponent } from './mobile-team-more/mobile-team-more.component';
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
import { ActivityListComponent } from './components/activities/activity-list/activity-list.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { TableAnswerCallComponent } from './components/table-answer-call/table-answer-call.component';
import { TableTVgridComponent } from './components/table-tvgrid/table-tvgrid.component';
import { TableTvgridButtonComponent } from './components/table-tvgrid-button/table-tvgrid-button.component';
import { CalendarMobileComponent } from './components/calendar-mobile/calendar-mobile.component';
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
    TestListComponent,
    GButtonComponent,
    MobileFooterComponent,
    MoreBarComponent,
    MobileControllerComponent,
    MobileControllerMoreComponent,
    MessageExtraComponent,
    TableMenuComponent,
    TableMenuCarouselComponent,
    AccountMenuComponent,
    ConversationPreviewComponent,
    ConversationMessagePreviewComponent,
    EmojiCounterComponent,
    MobileChatComponent,
    MobileMessageLeftComponent,
    MobileMessageComponent,
    MobileChatBarComponent,
    MobileTeamMoreComponent,
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
    ActivityMessageComponent,
    ActivityListComponent,
    DropdownComponent,
    DropdownMenuComponent,
    TableAnswerCallComponent,
    TableTVgridComponent,
    TableTvgridButtonComponent,
    CalendarMobileComponent,
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
    MatListModule,
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
