import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.css']
})
export class VolumeSliderComponent implements OnInit {
  value : number;
  
  @Input('image_url') url: string;
  
  constructor() { }

  ngOnInit(): void {
    this.value = 75;
  }

}
