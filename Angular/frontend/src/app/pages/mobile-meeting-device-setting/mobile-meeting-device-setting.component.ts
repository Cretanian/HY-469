import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'mobile-meeting-device-setting',
  templateUrl: './mobile-meeting-device-setting.component.html',
  styleUrls: ['./mobile-meeting-device-setting.component.css']
})
export class MobileMeetingDeviceSettingComponent implements OnInit {
  @Input('label') label: string;
  @Input('options') dropdownOptions: dropdownOption[]
  @Input('toggler') toggler: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}

class dropdownOption{
  name: string;
}