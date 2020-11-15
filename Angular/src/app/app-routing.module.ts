import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MobileChatComponent } from './mobile-chat/mobile-chat.component';

const routes: Routes = [
  { path: 'mobile-chat', component: MobileChatComponent },
  { path: 'main', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

};

export const routingComponents = [AppComponent, MobileChatComponent]; 