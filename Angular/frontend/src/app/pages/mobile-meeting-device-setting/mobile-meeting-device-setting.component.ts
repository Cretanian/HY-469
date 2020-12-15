import { Component, Input, OnInit } from '@angular/core';
import { InOutDevicesService } from 'src/app/global/services/Cretanian/InOut-devices/inout-devices.service';
import { SocketsService } from "src/app/global/services";
import { OutVideoService } from 'src/app/global/services/Cretanian/out-video/out-video.service';

@Component({
  selector: 'mobile-meeting-device-setting',
  templateUrl: './mobile-meeting-device-setting.component.html',
  styleUrls: ['./mobile-meeting-device-setting.component.css']
})
export class MobileMeetingDeviceSettingComponent implements OnInit {
  @Input('label') label: string;
  @Input('options') dropdownOptions: dropdownOption[]
  @Input('toggler') toggler: boolean = false;
  
  constructor(
    private inoutService: InOutDevicesService,
    private socketService: SocketsService,
    private outvideoService: OutVideoService
  ) { }

  ngOnInit(): void {

  }

  dropdownChanged(selection: string){
    if(this.label.includes('Input'))
      this.inoutService.setInput(selection);
    else if (this.label.includes('Output'))
      this.inoutService.setOutput(selection);
  }
}

class dropdownOption{
  name: string;
}