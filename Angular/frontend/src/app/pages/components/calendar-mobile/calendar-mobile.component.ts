import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calendar-mobile',
  templateUrl: './calendar-mobile.component.html',
  styleUrls: ['./calendar-mobile.component.css']
})
export class CalendarMobileComponent implements OnInit {

  @Input() daysNames: string[];
  @Input() daysNums:  number[];

  constructor() { }

  ngOnInit(): void {
    this.daysNames = [
      "Mon","Tue","Wed","Thu","Fri","Sat","Sun"
    ]

    this.daysNums = [11,12,13,14,15,16,17]
  }

}
