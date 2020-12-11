import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.css']
})
export class VolumeSliderComponent implements OnInit {
  value : number;
  helper : number;
  @Input('image_url') url: string;
  
  constructor() { }


  ngOnInit(): void {
    this.value = 75;
    this.helper = 75;
  }

  mute(){
    if(this.value != 0){
      this.helper = this.value;
      this.value = 0;
    }else{
      this.value = this.helper;
    }
  }

}
