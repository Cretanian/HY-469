import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-online-devices',
  templateUrl: './explorer-online-devices.component.html',
  styleUrls: ['./explorer-online-devices.component.css']
})
export class ExplorerOnlineDevicesComponent implements OnInit {
  devices_array:device[] = [
      {
        "icon" : '/assets/online-devices/device_active.png',
        "name" : 'LG Smart TV'
      },
      {
        "icon" : '/assets/online-devices/device_active.png',
        "name" : 'Smart Table'
      },
      {
        "icon" : '/assets/online-devices/device_deactive.png',
        "name" : 'Alexa'
      }    
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
class device{
  icon:string;
  name:string;

  constructor() { 
    this.icon ='';
    this.name ='';
  }
}