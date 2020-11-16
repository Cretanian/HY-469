import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-cameras-wall',
  templateUrl: './tv-cameras-wall.component.html',
  styleUrls: ['./tv-cameras-wall.component.css']
})
export class TvCamerasWallComponent implements OnInit {
  
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
    },
    ]; 
  constructor() { 
  
  }

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