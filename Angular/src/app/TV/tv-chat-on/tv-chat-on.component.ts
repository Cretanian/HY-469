import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-chat-on',
  templateUrl: './tv-chat-on.component.html',
  styleUrls: ['./tv-chat-on.component.css']
})
export class TvChatOnComponent implements OnInit {
  speakers_array:speakers[] = [
    {
      "image" : '/assets/tv-speaker/user.png',
      "mic" : '/assets/slider/mic.png',
      "speaker" : 'Stelios stamatakis'
    },
    {
      "image" : '/assets/tv-speaker/user.png',
      "mic" : '/assets/slider/mic.png',
      "speaker" : 'Stelios stamatakis'
    },
       {
      "image" : '/assets/tv-speaker/user.png',
      "mic" : '/assets/slider/mic.png',
      "speaker" : 'Stelios stamatakis'
    },  {
      "image" : '/assets/tv-speaker/user.png',
      "mic" : '/assets/slider/mic.png',
      "speaker" : 'Stelios stamatakis'
    },
    
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}

class speakers{
  image:string;
  mic:string;
  speaker:string;
  constructor() { 
    this.image ='';
    this.mic ='';
    this.speaker ='';
  }
}