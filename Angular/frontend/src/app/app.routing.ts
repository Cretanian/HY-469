import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*Cretanian*/
import { ExplorerChatComponent } from './pages/Final-Cretanian/explorer-chat/explorer-chat.component';
import { ExplorerTeamsComponent } from './pages/Final-Cretanian/explorer-teams/explorer-teams.component';
import { NotFoundComponent } from './pages/Final-Cretanian/not-found/not-found.component';
import { ExplorerFilesComponent } from './pages/Final-Cretanian/explorer-files/explorer-files.component';
import { ExplorerCalendarComponent } from './pages/Final-Cretanian/explorer-calendar/explorer-calendar.component';
import { ExplorerSmarthomeComponent } from './pages/Final-Cretanian/explorer-smarthome/explorer-smarthome.component';
import { ExplorerTeamsFilesComponent } from './pages/Final-Cretanian/explorer-teams-files/explorer-teams-files.component';
import { ExplorerTeamsCalendarComponent } from './pages/Final-Cretanian/explorer-teams-calendar/explorer-teams-calendar.component';
import { ExplorerOnlineDevicesComponent } from './pages/Final-Cretanian/explorer-online-devices/explorer-online-devices.component';
import { ContactsComponent } from './pages/Final-Cretanian/contacts/contacts.component';
import { ActivitiesComponent } from './pages/Final-Cretanian/activities/activities.component';
import { MobileChatComponent } from './pages/mobile-chat/mobile-chat.component';
import { TVGridMobileComponent } from './pages/Final-Cretanian/tv-grid-mobile/tv-grid-mobile.component';
import { OncallCallSettingsComponent } from './pages/Final-Cretanian/oncall-call-settings/oncall-call-settings.component';
import { ConversationsComponent } from './pages/Final-Cretanian/conversations/conversations.component';
import { ParticipantsMobileComponent } from './pages/Final-Cretanian/participants-mobile/participants-mobile.component';
import { MobileControllerComponent } from './pages/mobile-controller/mobile-controller.component';
import { MobileJoinMeetingComponent } from './pages/mobile-join-meeting/mobile-join-meeting.component';
import { OncallFilesComponent } from './pages/Final-Cretanian/oncall-files/oncall-files.component';
import { ControllerCallChatComponent } from './pages/Final-Cretanian/controller-call-chat/controller-call-chat.component';
import { ExplorerTeamConversationComponent } from './pages/Final-Cretanian/explorer-team-conversation/explorer-team-conversation.component';
import { ExplorerContactChatComponent } from './pages/Final-Cretanian/explorer-contact-chat/explorer-contact-chat.component'
import { SetUserComponent } from './pages/set-user/set-user.component'
import { TvMasterComponent } from './pages/Final-Cretanian/tv-master/tv-master.component'
import { ManyUsersComponent } from   './pages/Final-Wall/many-users/many-users.component'
import { FinalTableComponent } from   './pages/Table/final-table/final-table.component'

const routes: Routes = [
  { path: '', redirectTo: '/explorer-mobile-team-controller', pathMatch: 'full'},
  /*Oncall*/
  { path: 'explorer-mobile-team-joinmeeting', component: MobileJoinMeetingComponent },
  { path: 'explorer-mobile-team-controller', component: MobileControllerComponent },
  { path: 'explorer-mobile-team-tvgrid', component: TVGridMobileComponent },
  { path: 'explorer-mobile-team-chat', component: ControllerCallChatComponent },
  { path: 'explorer-mobile-team-call-setting', component: OncallCallSettingsComponent },
  { path: 'explorer-mobile-team-participants', component: ParticipantsMobileComponent },
  { path: 'explorer-mobile-team-files', component: OncallFilesComponent },
  { path: 'wall-master', component: ManyUsersComponent },
  { path: 'table-master', component: FinalTableComponent},
  /*Mobile*/
  { path: 'explorer-mobile-activities', component: ActivitiesComponent },
  { path: 'explorer-mobile-contacts', component: ContactsComponent },
  { path: 'explorer-mobile-chat', component: ExplorerChatComponent },
  { path: 'explorer-mobile-teams', component: ExplorerTeamsComponent },
  { path: 'explorer-mobile-files', component: ExplorerFilesComponent },
  { path: 'explorer-mobile-calendar', component: ExplorerCalendarComponent },
  { path: 'explorer-mobile-smarthome', component: ExplorerSmarthomeComponent },
  { path: 'explorer-mobile-onlinedevices/:team_name', component: ExplorerOnlineDevicesComponent },
  { path: 'explorer-mobile-teams-files/:team_name', component: ExplorerTeamsFilesComponent },
  { path: 'explorer-mobile-teams-calendar/:team_name', component: ExplorerTeamsCalendarComponent },
  { path: 'explorer-mobile-team-conversations/:team_name', component: ConversationsComponent },
  { path: 'explorer-mobile-team-conversation/:team_name/:conversationID', component: ExplorerTeamConversationComponent },
  { path: 'explorer-mobile-contact-chat/:contact', component: ExplorerContactChatComponent },
  { path: 'set-user', component: SetUserComponent},
  { path: 'tv-master', component: TvMasterComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
  NotFoundComponent
]; 
