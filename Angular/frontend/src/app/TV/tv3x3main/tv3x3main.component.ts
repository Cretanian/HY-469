import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv3x3main',
  templateUrl: './tv3x3main.component.html',
  styleUrls: ['./tv3x3main.component.css']
})
export class Tv3x3mainComponent implements OnInit {
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