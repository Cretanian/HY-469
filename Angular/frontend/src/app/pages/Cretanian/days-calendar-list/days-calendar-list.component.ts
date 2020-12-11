import { Component, OnInit,Input } from '@angular/core';
import { TeamDayCalendarListService } from 'src/app/global/services/Cretanian/lists/team-day-calendar-list/team-day-calendar-list.service';

@Component({
  selector: 'app-days-calendar-list',
  templateUrl: './days-calendar-list.component.html',
  styleUrls: ['./days-calendar-list.component.css']
})
export class DaysCalendarListComponent implements OnInit {
  
  event_A: events;

  @Input() day: string;
  @Input() date: string;
  @Input() month: string;
  @Input() team_name: string;

  helper: helper[];

 
  constructor(private fileheadersService: TeamDayCalendarListService) {}

  ngOnInit(): void {
    this.event_A = new events();
    this.event_A.date = this.date;
    this.event_A.month = this.month;
    this.event_A.day = this.day;
    this.event_A.events_array = [];

    this.fileheadersService.getAll("asd").subscribe(data => {
      this.helper = data as helper[];
      for (let entry of this.helper) {
        if(this.team_name == entry.team && 
           this.date === entry.date && 
           this.month === entry.month)
        {
          this.event_A.events_array.push(new event(entry.event, entry.time, entry.color));
        }
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
  constructor(event:string, time:string, color: string){
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
