import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-calendar-phone',
  templateUrl: './f-calendar-phone.component.html',
  styleUrls: ['./f-calendar-phone.component.css']
})
export class FCalendarPhoneComponent implements OnInit {
  events_array:event[] = [
    {
      "event" : 'ela re pame volta',
      "time" : '11:00 - 5:40'
    },
    
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}

class event{
  event:string;
  time:string;
  constructor(){
    this.event = '';
    this.time = '';
  }
}
