import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'tv-master',
  templateUrl: './tv-master.component.html',
  styleUrls: ['./tv-master.component.scss']
}
)

export class TvMasterComponent implements OnInit {

  constructor(private socketService: SocketsService) { }

  grid: string = '1main'

  ngOnInit(): void {
    this.socketService.syncMessages('tv/grid').subscribe(
      (event) => {
        console.log('Event arrived! Event message: ' + event.message);
        this.grid = event.message;
      }
    )
  }

}
