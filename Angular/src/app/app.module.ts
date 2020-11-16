import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { GButtonComponent } from './g-button/g-button.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { MoreBarComponent } from './more-bar/more-bar.component';
import { MobileControllerComponent } from './mobile-controller/mobile-controller.component';
import { MobileControllerMoreComponent } from './mobile-controller-more/mobile-controller-more.component';
import { MessageExtraComponent } from './message-extra/message-extra.component';
import { TableMenuComponent } from './Table/table-menu/table-menu.component';
import { TableMenuCarouselComponent } from './Table/table-menu-carousel/table-menu-carousel.component';
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
import { TvgridListComponent } from  './components/tvgrid-list/tvgrid-list.component';
import { ParticipantComponent } from  './components/participant/participant.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ParticipantTVComponent } from './TV/participant-tv/participant-tv.component';
import { ParticipantsTVComponent } from './TV/participants-tv/participants-tv.component';
import { ContactComponent } from  './components/contacts/contact/contact.component';
import { ContactListComponent } from './components/contacts/contact-list/contact-list.component';
import { ContactSectionComponent } from './components/contacts/contact-section/contact-section.component';
import { ContactSectionListComponent } from './components/contacts/contact-section-list/contact-section-list.component';
import { EmptyComponent } from './components/activities/empty/empty.component';
import { TableParticipantsComponent } from './Table/table-participants/table-participants/table-participants.component';
import { TableParticipantComponent } from './Table/table-participants/table-participant/table-participant.component';
import { TableFooterComponent } from './Table/table-utilComponents/table-footer/table-footer.component';
import { NavigationButtonsComponent } from './Table/table-participants/navigation-buttons/navigation-buttons.component';
import { ParticipantsWindowComponent } from './Table/table-participants/participants-window/participants-window.component';
import { OptionsButtonsComponent } from './Table/table-participants/options-buttons/options-buttons.component';
import { ActivityComponent } from './components/activities/activity/activity.component';
import { ActivityMessageComponent } from './components/activities/activity-message/activity-message.component';
import { ActivityListComponent } from './components/activities/activity-list/activity-list.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { TableAnswerCallComponent } from './Table/table-answer-call/table-answer-call.component';
import { TableTVgridComponent } from './Table/table-tvgrid/table-tvgrid.component';
import { TableTvgridButtonComponent } from './Table/table-tvgrid-button/table-tvgrid-button.component';
import { CalendarMobileComponent } from './components/calendar-mobile/calendar-mobile.component';

/*Cretanian*/
import { AppRoutingModule } from './app-routing.module';
import { TeamsButtonComponent } from './Cretanian/teams-button/teams-button.component';
import { OnlineDevicesComponent } from './Cretanian/online-devices/online-devices.component';
import { VolumeSliderComponent } from './Cretanian/volume-slider/volume-slider.component';
import { GenericVolumeEditorComponent } from './Cretanian/generic-volume-editor/generic-volume-editor.component';
import { TvSpeakerComponent } from './TV/tv-speaker/tv-speaker.component';
import { ChatMessegesComponent } from './Cretanian/chat-messeges/chat-messeges.component';
import { FilesComponent } from './Cretanian/files/files.component';
import { CalendarEventComponent } from './Cretanian/calendar-event/calendar-event.component';
import { TVIncomingCallComponent } from './TV/tv-incoming-call/tv-incoming-call.component';
import { CallendaEventWallComponent } from './Wall/callenda-event-wall/callenda-event-wall.component';
import { UpcomingEventsItemComponent } from './Wall/upcoming-events-item/upcoming-events-item.component';
import { GenericUpcomingEventsBackgroundComponent } from './Wall/generic-upcoming-events-background/generic-upcoming-events-background.component';
import { TodaysEventsComponent } from './Wall/todays-events/todays-events.component';
import { FDisplayUpcomingEventsComponent } from './Wall/f-display-upcoming-events/f-display-upcoming-events.component';
import { CallendarHeadComponent } from './Wall/callendar-head/callendar-head.component';
import { FinalCalendarComponent } from './Cretanian/final-calendar/final-calendar.component';
import { TvCamerasWallComponent } from './Wall/tv-cameras-wall/tv-cameras-wall.component';
import { Tv3mainComponent } from './TV/tv3main/tv3main.component';
import { Tv1mainComponent } from './TV/tv1main/tv1main.component';
import { Screenshare1mainComponent } from './TV/screenshare1main/screenshare1main.component';
import { Tv3x3mainComponent } from './TV/tv3x3main/tv3x3main.component';
import { TvChatOnComponent } from './TV/tv-chat-on/tv-chat-on.component';
import { FOnlineDivicesComponent } from './Cretanian/f-online-divices/f-online-divices.component';
import { GenDayCalendarComponent } from './Cretanian/gen-day-calendar/gen-day-calendar.component';
import { FCalendarPhoneComponent } from './Cretanian/f-calendar-phone/f-calendar-phone.component';
import { DaysCalendarListComponent } from './Cretanian/days-calendar-list/days-calendar-list.component';
import { ChatListComponent } from './Cretanian/chat-list/chat-list.component';
import { FChatComponent } from './Cretanian/f-chat/f-chat.component';
import { FilesListComponent } from './Cretanian/files-list/files-list.component';
import { FFilesComponent } from './Cretanian/f-files/f-files.component';
import { OutAudioComponent } from './Cretanian/in/out-audio/out-audio.component';
import { GenericHeaderItemComponent } from './Cretanian/generic-header-item/generic-header-item.component';
import { AudioSettingsCameraComponent } from './Cretanian/audio-settings-camera/audio-settings-camera.component';
import { CameraSettingsComponent } from './Cretanian/camera-settings/camera-settings.component';
import { ParticipantsSettingsComponent } from './Cretanian/participants-settings/participants-settings.component';
import { FCallSettingsComponent } from './Cretanian/f-call-settings/f-call-settings.component';
import { TeamsComponent } from './Final-Cretanian/teams/teams.component';



@NgModule({
  declarations: [
    AppComponent,
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
    FCallSettingsComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
