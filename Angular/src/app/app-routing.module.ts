import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Cretanian*/
import { ExplorerChatComponent } from './Final-Cretanian/explorer-chat/explorer-chat.component';
import { ExplorerTeamsComponent } from './Final-Cretanian/explorer-teams/explorer-teams.component';
import { NotFoundComponent } from './Final-Cretanian/not-found/not-found.component';
import { ExplorerFilesComponent } from './Final-Cretanian/explorer-files/explorer-files.component';
import { ExplorerCalendarComponent } from './Final-Cretanian/explorer-calendar/explorer-calendar.component';
import { ExplorerSmarthomeComponent } from './Final-Cretanian/explorer-smarthome/explorer-smarthome.component';
import { ExplorerTeamsFilesComponent } from './Final-Cretanian/explorer-teams-files/explorer-teams-files.component';
import { ExplorerTeamsCalendarComponent } from './Final-Cretanian/explorer-teams-calendar/explorer-teams-calendar.component';
import { ExplorerOnlineDevicesComponent } from './Final-Cretanian/explorer-online-devices/explorer-online-devices.component';
import { ContactsComponent } from './Final-Cretanian/contacts/contacts.component';
import { ActivitiesComponent } from './Final-Cretanian/activities/activities.component';
import { MobileChatComponent } from './mobile-chat/mobile-chat.component';
import { TVGridMobileComponent } from './Final-Cretanian/tv-grid-mobile/tv-grid-mobile.component';
import { OncallCallSettingsComponent } from './Final-Cretanian/oncall-call-settings/oncall-call-settings.component';
import { ConversationsComponent } from './Final-Cretanian/conversations/conversations.component';
import { ParticipantsMobileComponent } from './Final-Cretanian/participants-mobile/participants-mobile.component';
import { MobileControllerComponent } from './mobile-controller/mobile-controller.component';
import { MobileJoinMeetingComponent } from './mobile-join-meeting/mobile-join-meeting.component';
import { OncallFilesComponent } from './Final-Cretanian/oncall-files/oncall-files.component';


const routes: Routes = [
  { path: '', redirectTo: '/explorer-mobile-teams', pathMatch: 'full'},
  /*Oncall*/
  { path: 'explorer-mobile-team-joinmeeting', component: MobileJoinMeetingComponent },
  { path: 'explorer-mobile-team-controller', component: MobileControllerComponent },
  { path: 'explorer-mobile-team-tvgrid', component: TVGridMobileComponent },
  { path: 'explorer-mobile-team-chat', component: MobileChatComponent },
  { path: 'explorer-mobile-team-call-setting', component: OncallCallSettingsComponent },
  { path: 'explorer-mobile-team-participants', component: ParticipantsMobileComponent },
  { path: 'explorer-mobile-team-conversations', component: ConversationsComponent },
  { path: 'explorer-mobile-team-files', component: OncallFilesComponent },
  /*Mobile*/
  { path: 'explorer-mobile-activities', component: ActivitiesComponent },
  { path: 'explorer-mobile-contacts', component: ContactsComponent },
  { path: 'explorer-mobile-chat', component: ExplorerChatComponent },
  { path: 'explorer-mobile-teams', component: ExplorerTeamsComponent },
  { path: 'explorer-mobile-files', component: ExplorerFilesComponent },
  { path: 'explorer-mobile-calendar', component: ExplorerCalendarComponent },
  { path: 'explorer-mobile-smarthome', component: ExplorerSmarthomeComponent },
  { path: 'explorer-mobile-onlinedevices', component: ExplorerOnlineDevicesComponent },
  { path: 'explorer-mobile-teams-files', component: ExplorerTeamsFilesComponent },
  { path: 'explorer-mobile-teams-calendar', component: ExplorerTeamsCalendarComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

};

export const routingComponents = [
  ActivitiesComponent,
  ContactsComponent,
  ExplorerChatComponent,
  ExplorerTeamsComponent,
  ExplorerFilesComponent,
  ExplorerCalendarComponent,
  ExplorerSmarthomeComponent,
  ExplorerOnlineDevicesComponent,
  ExplorerTeamsFilesComponent,
  ExplorerTeamsCalendarComponent,
  MobileChatComponent,
  MobileJoinMeetingComponent,
  MobileControllerComponent,
  TVGridMobileComponent,
  OncallCallSettingsComponent,
  OncallFilesComponent,
  ConversationsComponent,
  ParticipantsMobileComponent,
  
]; 
