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
  @Input('width') width: string;
  @Input('height') height: string;

  elements:HTMLElement = document.getElementsByClassName("size")[0] as HTMLElement;
  
  constructor() {
    //this.elements.style.width = this.width + "px";
   // this.elements.style.height = this.height + "px";

   }

  ngOnInit(): void {
  }
 
 
}
