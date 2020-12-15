import { Component, OnInit } from '@angular/core';
import { InOutDevicesService } from 'src/app/global/services/Cretanian/InOut-devices/inout-devices.service';
import { SocketsService } from "src/app/global/services";
import { OutVideoService } from 'src/app/global/services/Cretanian/out-video/out-video.service';

@Component({
  selector: 'mobile-join-meeting',
  templateUrl: './mobile-join-meeting.component.html',
  styleUrls: ['./mobile-join-meeting.component.css']
})
export class MobileJoinMeetingComponent implements OnInit {

  //Gather info from device:
  cameraOptions: dropdownOption[];
  inputOptions: dropdownOption[];
  outputOptions: dropdownOption[];

  constructor(
    private outvideoService: OutVideoService,
    private inoutdevicesService: InOutDevicesService,
    private socketService: SocketsService
  ) { }

  ngOnInit(): void {
    this.loadIODevices();

    this.socketService.syncMessages("device/changed").subscribe((event) => {
      this.loadIODevices();
    });
  }

  loadIODevices(){
    this.outvideoService.getAll("asd").subscribe(data => {
      this.cameraOptions = data as dropdownOption[];
    });

    this.inoutdevicesService.getAll("asd").subscribe((data: any) => {
      this.inputOptions = data.inputDevices as dropdownOption[];
      this.outputOptions = data.outputDevices as dropdownOption[];
    });
  }
}

class dropdownOption{
  name: string;
}