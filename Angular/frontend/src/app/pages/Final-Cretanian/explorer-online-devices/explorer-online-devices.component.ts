import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OnlineDevicesListService } from 'src/app/global/services/Cretanian/lists/online-devices-list/online-devices-list.service';
@Component({
  selector: 'app-explorer-online-devices',
  templateUrl: './explorer-online-devices.component.html',
  styleUrls: ['./explorer-online-devices.component.css']
})
export class ExplorerOnlineDevicesComponent implements OnInit {
  @Input() Team_name: string;

  devices_array:device[];

  constructor(private _location: Location,
              private _Activatedroute:ActivatedRoute,
              private onlinedeviceslistService: OnlineDevicesListService
              ) 
  {}
  
  ngOnInit(): void {
    this.Team_name = this._Activatedroute.snapshot.paramMap.get("team_name");
    
    this.onlinedeviceslistService.getAll("asd").subscribe(data => {
      this.devices_array = data as device[];
    });
  }

  backClicked() {
    this._location.back();
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