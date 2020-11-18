import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name: string;
  @Input() src1: string;
  @Input() src2: string;
  @Input() src3: string;

  @Output() event1: EventEmitter<void> = new EventEmitter<void>();
  @Output() event2: EventEmitter<void> = new EventEmitter<void>();
  @Output() event3: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(i: number){
    console.log('calling event ' + i)
    switch(i){
      case 1: 
        this.event1.emit();
        break;
      case 2:
        this.event2.emit();
        break;
      case 3: 
        this.event3.emit();
        break;
    }
  }

}
