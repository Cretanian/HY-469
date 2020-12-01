import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mobile-controller-call-info',
  templateUrl: './mobile-controller-call-info.component.html',
  styleUrls: ['./mobile-controller-call-info.component.css']
})
export class MobileControllerCallInfoComponent implements OnInit {

  @Input('callName') callName: string;

  constructor() { }

  ngOnInit(): void {
    if(this.callName == undefined)
      this.callName = 'undef'
  }

}
