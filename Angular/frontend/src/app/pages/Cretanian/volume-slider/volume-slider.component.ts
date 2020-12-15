import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.css']
})
export class VolumeSliderComponent implements OnInit {
  @Input() value : number;
  helper : number = 75;
  @Input('image_url') url: string;
  
  constructor() { }


  ngOnInit(): void {
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
