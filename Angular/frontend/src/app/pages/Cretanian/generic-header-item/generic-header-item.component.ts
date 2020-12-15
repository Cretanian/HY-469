import { Component,  OnInit } from '@angular/core';
import { InOutDevicesService } from 'src/app/global/services/Cretanian/InOut-devices/inout-devices.service';

@Component({
  selector: 'app-generic-header-item',
  templateUrl: './generic-header-item.component.html',
  styleUrls: ['./generic-header-item.component.css']
})
export class GenericHeaderItemComponent implements OnInit {
  volume_:volume;
  dropdownOptions: dropdownOption[] = [];

  constructor(private inoutdevicesService: InOutDevicesService) { }

  ngOnInit(): void {
    this.inoutdevicesService.getAll("asd").subscribe(data => {
      this.dropdownOptions = data as dropdownOption[];
      console.log(this.dropdownOptions);
    });
    
    this.inoutdevicesService.getAll2("asd").subscribe(data => {
      this.volume_ = data as volume;
      console.log('eee' +this.volume_);
    });
  }
}

class volume{
  in_volume:number;
  out_volume:number;
}

class dropdownOption{
  name: string;
}
