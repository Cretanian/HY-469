import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-online-divices',
  templateUrl: './f-online-divices.component.html',
  styleUrls: ['./f-online-divices.component.css']
})
export class FOnlineDivicesComponent implements OnInit {

  devices_array:device[] = [
    {
      "icon" : '/assets/online-devices/device_active.png',
      "name" : 'yolololololol'
    },
    {
      "icon" : '/assets/online-devices/device_active.png',
      "name" : 'yolololololol'
    },
    {
      "icon" : '/assets/online-devices/device_deactive.png',
      "name" : 'yolololololol'
    },
    
    ]; 
  constructor() { }

  ngOnInit(): void {
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