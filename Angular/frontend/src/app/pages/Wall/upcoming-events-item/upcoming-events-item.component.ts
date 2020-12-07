import { Component, Input, OnInit } from '@angular/core';
import { ExplorerDayCalendarListService } from 'src/app/global/services/Cretanian/lists/explorer-day-calendar-list/explorer-day-calendar-list.service';
import { TeamDayCalendarListService } from 'src/app/global/services/Cretanian/lists/team-day-calendar-list/team-day-calendar-list.service';

@Component({
  selector: 'app-upcoming-events-item',
  templateUrl: './upcoming-events-item.component.html',
  styleUrls: ['./upcoming-events-item.component.css']
})


//to do: only 4 displayed not more
export class UpcomingEventsItemComponent implements OnInit {
  
  @Input() day: string;
  @Input() date: string;
  @Input() month: string;
  @Input() team_name: string;

  event_array:event[] = [];
  helper: helper[] = [];

  constructor(private fileheadersService: TeamDayCalendarListService) {}

  ngOnInit(): void {
    this.fileheadersService.getAll("asd").subscribe(data => {
    this.helper = data as helper[];
    for (let entry of this.helper) {
      if(this.team_name == entry.team && 
         this.date === entry.date && 
         this.month === entry.month)
      {
        this.event_array = [];
        this.event_array.push(new event(entry.event, entry.time));
      }
      
    }

    if(this.event_array.length > 4){
      this.event_array = this.event_array.splice(0,4);;
    }else{
      this.event_array = this.event_array;
    }

    });
  }
}
class helper{
  team:string;
  date: string;
  month: string;
  event: string;
  time: string;
}
class event{
  event:string;
  time:string;

  constructor(event:string, time:string){
    this.event = event;
    this.time = time;
  }
}

class events{
  day: string;
  date: string;
  month: string;
  events_array: event[] = [];
}