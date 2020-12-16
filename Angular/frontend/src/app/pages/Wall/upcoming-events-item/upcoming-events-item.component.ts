import { Component, Input, OnInit } from '@angular/core';
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

  color:string;
  event_array:event[] = [];
  helper: helper[] = [];

  constructor(private fileheadersService: TeamDayCalendarListService) {}

  ngOnInit(): void {
    this.color = "white";
    this.fileheadersService.getAll("asd").subscribe(data => {
    this.helper = data as helper[];
    this.event_array = [];
    for (let entry of this.helper) {
      if(this.team_name == entry.team && 
         this.date === entry.date && 
         this.month === entry.month)
      {
        this.event_array.push(new event(entry.event, entry.time, entry.color));
      }
      
    }

    if(this.event_array.length > 4){
      this.event_array = this.event_array.splice(0,4);;
    }else{
      this.event_array = this.event_array;
    }

    if(this.event_array.length == 0){
      this.color = "#9E9E9E";
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
  color: string;
}
class event{
  event:string;
  time:string;
  color: string;
  constructor(event:string, time:string, color:string){
    this.event = event;
    this.time = time;
    this.color = color;
  }
}

class events{
  day: string;
  date: string;
  month: string;
  events_array: event[] = [];
}