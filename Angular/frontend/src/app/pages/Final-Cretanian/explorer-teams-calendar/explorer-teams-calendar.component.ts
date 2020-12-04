import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-explorer-teams-calendar',
  templateUrl: './explorer-teams-calendar.component.html',
  styleUrls: ['./explorer-teams-calendar.component.css']
})
export class ExplorerTeamsCalendarComponent implements OnInit {
  events_array:event[] = [
    {
      "date" : '16',
      "month" : 'OCT',
      "day" : 'Today',
    },
    {
      "date" : '17',
      "month" : 'OCT',
      "day" : 'Tommorow',
    },
    {
      "date" : '18',
      "month" : 'OCT',
      "day" : 'Mon.',
    },
    {
      "date" : '19',
      "month" : 'OCT',
      "day" : 'Tue.',
    },
    {
      "date" : '20',
      "month" : 'OCT',
      "day" : 'Wed.',
    },
    {
      "date" : '21',
      "month" : 'OCT',
      "day" : 'Thu.',
    },
    {
      "date" : '22',
      "month" : 'OCT',
      "day" : 'Fri.',
    },
    {
      "date" : '23',
      "month" : 'OCT',
      "day" : 'Sat.',
    },
    {
      "date" : '24',
      "month" : 'OCT',
      "day" : 'Sun.',
    },
    
    ]; 

    constructor(private _location: Location) 
    {}
  
    backClicked() {
      this._location.back();
    }

  ngOnInit(): void {
  }

}

class event{
  date:string;
  month:string;
  day: string

}
