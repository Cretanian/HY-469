import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-speaker',
  templateUrl: './tv-speaker.component.html',
  styleUrls: ['./tv-speaker.component.css']
})
export class TvSpeakerComponent implements OnInit {

  @Input('image') image_url: string;
  @Input('mic') icon: string;
  @Input('speaker') name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
