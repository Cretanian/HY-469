import { Component, Input, OnInit } from '@angular/core';
import { InOutDevicesService } from 'src/app/global/services/Cretanian/InOut-devices/inout-devices.service';


@Component({
  selector: 'app-out-audio',
  templateUrl: './out-audio.component.html',
  styleUrls: ['./out-audio.component.css']
})
export class OutAudioComponent implements OnInit {
  @Input ('device') device: string;

  dropdownOptions: dropdownOption[] = [] ;
  
  
  constructor(private inoutdevicesService: InOutDevicesService) { }

  ngOnInit(): void {
    this.inoutdevicesService.getAll("asd").subscribe(data => {
      this.dropdownOptions = data as dropdownOption[];
    });
  }

}

class dropdownOption{
  name: string;
}
