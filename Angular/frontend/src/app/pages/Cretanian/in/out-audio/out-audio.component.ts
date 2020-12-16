import { Component, Input, OnInit } from '@angular/core';
import { InOutDevicesService } from '../../../../global/services/Cretanian/InOut-devices/inout-devices.service'

@Component({
  selector: 'app-out-audio',
  templateUrl: './out-audio.component.html',
  styleUrls: ['./out-audio.component.css']
})
export class OutAudioComponent implements OnInit {
  @Input ('device') device: string;
  @Input ()volume:number;
  @Input ()dropdownOptions: dropdownOption[];
    
  ngOnInit() { }

  constructor(
    private inoutService: InOutDevicesService
  ) { }

  postToBase(selection: string){
    console.log('asdasdasd ' + this.device);
    console.log('asdasdasd ' + selection);
    
    if(this.device == 'Input'){
      this.inoutService.setInput(selection);
    }
    else if (this.device == 'Output'){
      this.inoutService.setOutput(selection);
    }
  }
}

class dropdownOption{
  name: string;
}
