import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-controller',
  templateUrl: './mobile-controller.component.html',
  styleUrls: ['./mobile-controller.component.css']
})
export class MobileControllerComponent implements OnInit {

  @Input('callName') callName: string;

  constructor() { 
  }

  ngOnInit(): void {
    this.callName += ' is calling...'; 
    console.log(this.callName);
  }

}
