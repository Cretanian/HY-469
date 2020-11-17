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


const routes: Routes = [
  { path: '', redirectTo: '/explorer-mobile-teams', pathMatch: 'full'},
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
  ExplorerChatComponent,
  ExplorerTeamsComponent,
  ExplorerFilesComponent,
  ExplorerCalendarComponent,
  ExplorerSmarthomeComponent,
  ExplorerOnlineDevicesComponent,
  ExplorerTeamsFilesComponent,
  ExplorerTeamsCalendarComponent,
]; 