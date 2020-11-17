import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MobileChatComponent } from './mobile-chat/mobile-chat.component';
import { ExplorerChatComponent } from './Final-Cretanian/explorer-chat/explorer-chat.component';
import { ExplorerTeamsComponent } from './Final-Cretanian/explorer-teams/explorer-teams.component';
import { NotFoundComponent } from './Final-Cretanian/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/explorer-mobile-teams', pathMatch: 'full'},
  { path: 'explorer-mobile-chat', component: ExplorerChatComponent },
  { path: 'explorer-mobile-teams', component: ExplorerTeamsComponent },
  { path: 'mobile-chat', component: MobileChatComponent },
  { path: 'main', component: AppComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

};

export const routingComponents = [AppComponent, MobileChatComponent,ExplorerChatComponent]; 