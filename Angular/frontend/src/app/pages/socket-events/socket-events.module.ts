import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketEventsComponent } from './socket-events.component';
import { SocketEventsRoutingModule } from './socket-events.routing';

@NgModule({
  imports: [
    CommonModule,
    SocketEventsRoutingModule
  ],
  declarations: [SocketEventsComponent]
})
export class SocketEventsModule { }
