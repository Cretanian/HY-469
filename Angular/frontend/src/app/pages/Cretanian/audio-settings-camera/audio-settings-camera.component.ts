import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-settings-camera',
  templateUrl: './audio-settings-camera.component.html',
  styleUrls: ['./audio-settings-camera.component.css']
})
export class AudioSettingsCameraComponent implements OnInit {
  @Input("image") image: string;
  constructor() { }

  ngOnInit(): void {
  }

}
