import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-devices',
  templateUrl: './online-devices.component.html',
  styleUrls: ['./online-devices.component.css']
})
export class OnlineDevicesComponent implements OnInit {

  @Input ('icon') icon_source : string;
  @Input ('device_name') name : string;
  constructor() { }

  ngOnInit(): void {
  }

  myFunction(){
    //do smthng here
  }

}
