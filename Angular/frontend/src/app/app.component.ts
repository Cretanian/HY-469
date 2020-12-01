import { Component } from '@angular/core';
import { SocketsService } from './global/services';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ami-fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ZoomE';
  
  constructor(private socketsService: SocketsService) {
    // Connect to sockets server on startup
    this.socketsService.initAndConnect();




    //How to consume an event
    this.socketsService.syncMessages('eventName').subscribe((data)=>{
      console.log('The message i received for this event is: ', data);
    });
    
  }
}
