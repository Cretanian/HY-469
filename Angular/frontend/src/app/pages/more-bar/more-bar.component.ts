import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'more-bar',
  templateUrl: './more-bar.component.html',
  styleUrls: ['./more-bar.component.css']
})
export class MoreBarComponent implements OnInit {

  @Output() closeEvent: any = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  disableMore(): void{
    console.log('emitting event');
    this.closeEvent.emit();
  }  
} 