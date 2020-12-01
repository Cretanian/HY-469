import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocketEventsComponent } from './socket-events.component';


const routes: Routes = [
  { path: '', component: SocketEventsComponent, },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SocketEventsRoutingModule { }
