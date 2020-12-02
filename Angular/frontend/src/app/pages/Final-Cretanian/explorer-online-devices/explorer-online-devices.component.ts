import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-explorer-online-devices',
  templateUrl: './explorer-online-devices.component.html',
  styleUrls: ['./explorer-online-devices.component.css']
})
export class ExplorerOnlineDevicesComponent implements OnInit {
  @Input() Team_name: string;

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
  constructor(private _location: Location,
              private _Activatedroute:ActivatedRoute
              ) 
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    this.Team_name=this._Activatedroute.snapshot.paramMap.get("team_name");
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