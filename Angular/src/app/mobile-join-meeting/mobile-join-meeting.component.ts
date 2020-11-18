import { Component, OnInit } from '@angular/core';
import { dropdownOption } from '../components/dropdown-menu/dropdown-option';

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

  constructor() { }

  ngOnInit(): void {

  this.cameraOptions = [
    { name: 'Samsung TV' },
    { name: 'Samsugn A20e Mobile' }
  ]
  this.inputOptions = [
    { name: 'Samsung TV' },
    { name: 'Samsugn A20e Mobile' },
    { name: 'Alexa Home Assistant' }
  ]
  this.outputOptions = [
    { name: 'Samsung TV' },
    { name: 'Samsugn A20e Mobile' },
    { name: 'Alexa Home Assistant' },
    { name: 'Bluetooth 8DD Speaker'}
  ]

  }

}
