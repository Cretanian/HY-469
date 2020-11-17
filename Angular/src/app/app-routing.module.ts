import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MobileChatComponent } from './mobile-chat/mobile-chat.component';
import { ExplorerChatComponent } from './Final-Cretanian/explorer-chat/explorer-chat.component';
import { ExplorerTeamsComponent } from './Final-Cretanian/explorer-teams/explorer-teams.component';

const routes: Routes = [
  { path: 'explorer-mobile-chat', component: ExplorerChatComponent },
  { path: '', component: ExplorerTeamsComponent },
  { path: 'mobile-chat', component: MobileChatComponent },
  { path: 'main', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

};

export const routingComponents = [AppComponent, MobileChatComponent,ExplorerChatComponent]; 