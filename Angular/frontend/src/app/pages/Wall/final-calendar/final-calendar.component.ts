import { Component, OnInit } from '@angular/core';
import { TeamCalendarHeaderListService } from 'src/app/global/services/Cretanian/lists/team-calendar-header-list/team-calendar-header-list.service';

@Component({
  selector: 'app-final-calendar',
  templateUrl: './final-calendar.component.html',
  styleUrls: ['./final-calendar.component.css']
})
export class FinalCalendarComponent implements OnInit {

  Team_name: string;
  constructor(private fileheadersService: TeamCalendarHeaderListService) {}
  
  current_events_array:event[] = [];
  events_array:event[] = []; 


  helper:helper[]; 
  ngOnInit(): void {
    this.Team_name = 'YeetFleet' // to be changed

    this.fileheadersService.getAll("asd").subscribe(data => {
      this.helper = data as helper[];
      
      for (let entry of this.helper) {
        if(this.Team_name === entry.team){
          this.current_events_array.push(new event(entry.date, entry.month, entry.day));
        }
      }

      //TODO check the current day and send it 
      //FOR NOW I JUST SEND THE FIRST
      this.events_array.push(this.current_events_array.shift());
    
       if(this.current_events_array.length > 7){
        this.current_events_array = this.current_events_array.splice(0,7);;
      }else{
        this.current_events_array = this.current_events_array;
      }
    });
  }

}

class event{
  date: string;
  month:string;
  day: string;

  constructor(date: string, month:string, day: string){
    this.date = date;
    this.month = month;
    this.day = day;
  }
}

class helper{
  team: string;
  date: string;
  month:string;
  day: string

}