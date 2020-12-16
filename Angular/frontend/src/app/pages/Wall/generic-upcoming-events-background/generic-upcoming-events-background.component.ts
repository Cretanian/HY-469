import { Component, Input, OnInit } from '@angular/core';
import { TeamDayCalendarListService } from 'src/app/global/services/Cretanian/lists/team-day-calendar-list/team-day-calendar-list.service';

@Component({
  selector: 'app-generic-upcoming-events-background',
  templateUrl: './generic-upcoming-events-background.component.html',
  styleUrls: ['./generic-upcoming-events-background.component.css']
})

//to do: only 7 displayed not more
export class GenericUpcomingEventsBackgroundComponent implements OnInit {
  @Input() day: string;
  @Input() date: string;
  @Input() month: string;
  @Input() team_name: string;

  helper:helper[] = [];
  event_array:event[] = [];

  constructor(private fileheadersService: TeamDayCalendarListService) {}

  ngOnInit(): void {
    
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

      if(this.event_array.length > 6){
        this.event_array = this.event_array.splice(0,6);;
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