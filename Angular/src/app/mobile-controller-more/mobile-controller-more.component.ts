import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mobile-controller-more',
  templateUrl: './mobile-controller-more.component.html',
  styleUrls: ['./mobile-controller-more.component.css']
})

export class MobileControllerMoreComponent implements OnInit{

  @Input() toggler: any;
  @Output() closeEmitter: EventEmitter<void> = new EventEmitter<void>();
  signal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  disableMore(): void{
    console.log('emit');
    this.closeEmitter.emit();
  }
}
