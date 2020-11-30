import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Cretanian*/
import { ExplorerChatComponent } from './pages/Final-Phone/explorer-chat/explorer-chat.component';
import { ExplorerTeamsComponent } from './pages/Final-Phone/explorer-teams/explorer-teams.component';
import { NotFoundComponent } from './pages/Final-Phone/not-found/not-found.component';
import { ExplorerFilesComponent } from './pages/Final-Phone/explorer-files/explorer-files.component';
import { ExplorerCalendarComponent } from './pages/Final-Phone/explorer-calendar/explorer-calendar.component';
import { ExplorerSmarthomeComponent } from './pages/Final-Phone/explorer-smarthome/explorer-smarthome.component';
import { ExplorerTeamsFilesComponent } from './pages/Final-Phone/explorer-teams-files/explorer-teams-files.component';
import { ExplorerTeamsCalendarComponent } from './pages/Final-Phone/explorer-teams-calendar/explorer-teams-calendar.component';
import { ExplorerOnlineDevicesComponent } from './pages/Final-Phone/explorer-online-devices/explorer-online-devices.component';
import { ContactsComponent } from './pages/Final-Phone/contacts/contacts.component';
import { ActivitiesComponent } from './pages/Final-Phone/activities/activities.component';
import { MobileChatComponent } from './pages/mobile-chat/mobile-chat.component';
import { TVGridMobileComponent } from './pages/Final-Phone/tv-grid-mobile/tv-grid-mobile.component';
import { OncallCallSettingsComponent } from './pages/Final-Phone/oncall-call-settings/oncall-call-settings.component';
import { ConversationsComponent } from './pages/Final-Phone/conversations/conversations.component';
import { ParticipantsMobileComponent } from './pages/Final-Phone/participants-mobile/participants-mobile.component';
import { MobileControllerComponent } from './pages/mobile-controller/mobile-controller.component';
import { MobileJoinMeetingComponent } from './pages/mobile-join-meeting/mobile-join-meeting.component';
import { OncallFilesComponent } from './pages/Final-Phone/oncall-files/oncall-files.component';


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
