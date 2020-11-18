import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MobileControllerMoreComponent } from '../mobile-controller-more/mobile-controller-more.component';

@Component({
  selector: 'mobile-controller',
  templateUrl: './mobile-controller.component.html',
  styleUrls: ['./mobile-controller.component.css']
})

export class MobileControllerComponent implements OnInit{

  @Input('callName') callName: string;

  moreOpen: boolean = false;

  constructor() { 
    
  }

  ngOnInit(): void{
    
  }

  enableMore(): void{
    this.moreOpen = true;
  }

  disableMore(): void{
    console.log('receive');
    this.moreOpen = false;
  }
}
