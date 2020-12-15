import { Component, OnInit,Input } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { participant } from '../../components/utils/participant';

@Component({
  selector: 'app-tv-cameras-wall',
  templateUrl: './tv-cameras-wall.component.html',
  styleUrls: ['./tv-cameras-wall.component.css']
})
export class TvCamerasWallComponent implements OnInit {
  @Input() participants: participant[];
  grid: number = 3;
  constructor(private socketService: SocketsService,) { 
    
  }

  ngOnInit(): void {
    this.socketService.syncMessages('tv/grid').subscribe(
      (event) => {
        console.log('Event arrived! Event message: ' + event.message);
        this.grid = event.message;
      }
    );
  }

}
