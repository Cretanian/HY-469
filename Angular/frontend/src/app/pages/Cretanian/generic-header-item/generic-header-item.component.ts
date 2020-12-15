import { Component,  OnInit } from '@angular/core';
import { InOutDevicesService } from 'src/app/global/services/Cretanian/InOut-devices/inout-devices.service';
import { SocketsService } from "src/app/global/services";

@Component({
  selector: 'app-generic-header-item',
  templateUrl: './generic-header-item.component.html',
  styleUrls: ['./generic-header-item.component.css']
})
export class GenericHeaderItemComponent implements OnInit {
  ela:volume[];
  dropdownOptionsInput: dropdownOption[] = [];
  dropdownOptionsOutput: dropdownOption[] = [];
  InVolume:number;
  OutVolume:number;

  constructor(
    private inoutdevicesService: InOutDevicesService,
    private socketService: SocketsService
  ) { }

  ngOnInit(): void {
    this.loadIODevices();
    
    this.inoutdevicesService.getAll2("asd").subscribe(data2 => {
      this.ela = data2 as volume[];
      this.InVolume = this.ela[0].in_volume;
      this.OutVolume = this.ela[0].out_volume;
    });

    this.socketService.syncMessages("device/changed").subscribe((event) => {
      this.loadIODevices();
    });
  }

  loadIODevices(){
    this.inoutdevicesService.getAll("asd").subscribe( (data: any) => {
      this.dropdownOptionsInput = data.inputDevices as dropdownOption[];
      this.dropdownOptionsOutput = data.outputDevices as dropdownOption[];
    });
  }
}


class volume{
  in_volume:number;
  out_volume:number;
  constructor(){
    this.in_volume = 0;
    this.out_volume = 0;
  }
}

class dropdownOption{
  name: string;
}
