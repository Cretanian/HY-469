import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @Input ('event') event: string;
  @Input ('time') time: string;
  color:string;
  num:number;
  constructor() { 
    this.num = this.getRandomInt(100000,999999);
    this.color = '#' + this.num.toString();   
    let shand = document.getElementsByClassName('color') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.backgroundColor = this.color;
    }
  }

  ngOnInit(): void {
   
  }

  public getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

}
