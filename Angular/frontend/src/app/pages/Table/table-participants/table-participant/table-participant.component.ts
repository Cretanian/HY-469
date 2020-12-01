import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-participant',
  templateUrl: './table-participant.component.html',
  styleUrls: ['./table-participant.component.css']
})
export class TableParticipantComponent implements OnInit {

  @Input() name: string;
  @Input() src1: string;
  @Input() maxSize: number;


  constructor() { }

  ngOnInit(): void {
  }

  setMaxSize(width: number,percentage: number) {
    this.maxSize = width * percentage/100;
  }

  format(name: string): string {
    this.maxSize = Math.trunc(this.maxSize); 
    let decr = name.length-this.maxSize;
    if(decr < 2)
      decr = 3;

    if(name.length > this.maxSize)
      return name.slice(0, name.length-decr)+ "..."
    else
      return name;
  }

}
