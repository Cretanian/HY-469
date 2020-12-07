import { Component, OnInit } from '@angular/core';
import { ExplorerCalendarHeaderListService } from 'src/app/global/services/Cretanian/lists/explorer-calendar-header-list/explorer-calendar-header-list.service';

@Component({
  selector: 'app-explorer-calendar',
  templateUrl: './explorer-calendar.component.html',
  styleUrls: ['./explorer-calendar.component.css']
})
export class ExplorerCalendarComponent implements OnInit {
  
  events_array:event[]; 
    
  constructor(private fileheadersService: ExplorerCalendarHeaderListService) {}

  ngOnInit(): void {
    this.fileheadersService.getAll("asd").subscribe(data => {
      this.events_array = data as event[];
    });
  }
}
class event{
  date:string;
  month:string;
  day: string
}
