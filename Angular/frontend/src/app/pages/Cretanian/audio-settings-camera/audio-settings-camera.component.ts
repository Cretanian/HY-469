import { Component, Input, OnInit } from '@angular/core';
import { OutVideoService } from 'src/app/global/services/Cretanian/out-video/out-video.service';

@Component({
  selector: 'app-audio-settings-camera',
  templateUrl: './audio-settings-camera.component.html',
  styleUrls: ['./audio-settings-camera.component.css']
})
export class AudioSettingsCameraComponent implements OnInit {
  @Input("image") image: string;
  dropdownOptions: dropdownOption[];

  
  constructor(private outvideoService: OutVideoService) { }

  ngOnInit(): void {
    this.outvideoService.getAll("asd").subscribe(data => {
      this.dropdownOptions = data as dropdownOption[];
    });
  }
}

class dropdownOption{
  name: string;
}
