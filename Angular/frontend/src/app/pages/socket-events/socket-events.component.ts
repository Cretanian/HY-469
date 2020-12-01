import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-socket-events',
  templateUrl: './socket-events.component.html',
  styleUrls: ['./socket-events.component.scss']
})
export class SocketEventsComponent implements OnInit {

  public socketEvents: { event: string, message: any }[];

  constructor(private socketService: SocketsService) {
    this.socketEvents = [];
  }

  ngOnInit() {

    this.socketService
      .syncAllMessages()
      .subscribe(msg => {
        this.socketEvents.push(msg);
        console.log('test');
      });
  }


}
