import { Component, OnInit } from '@angular/core';
import { InOutDevicesService } from 'src/app/global/services/Cretanian/InOut-devices/inout-devices.service';
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

  constructor(private outvideoService: OutVideoService,private inoutdevicesService: InOutDevicesService) { }

  ngOnInit(): void {
    this.outvideoService.getAll("asd").subscribe(data => {
      this.cameraOptions = data as dropdownOption[];
    });

    this.inoutdevicesService.getAll("asd").subscribe(data => {
      this.inputOptions = data as dropdownOption[];
      this.outputOptions = data as dropdownOption[];
    });
  }
}

class dropdownOption{
  name: string;
}