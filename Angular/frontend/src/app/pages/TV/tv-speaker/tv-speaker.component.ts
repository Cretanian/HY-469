import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tv-speaker',
  templateUrl: './tv-speaker.component.html',
  styleUrls: ['./tv-speaker.component.css']
})
export class TvSpeakerComponent implements OnInit {
  @Input() volume: number;
  @Input('image') image_url: string;
  @Input() mic: boolean;
  @Input('speaker') name: string;
  @Input('margin') margin: string;
  @Input('width') width: string;
  @Input('height') height: string;

  @Input('paddingleft') paddingleft: string;
  @Input('fontsize') fontsize: string;
  @Input('top') top: string;

  @ViewChild('sizeRef', {static:true}) sizeRef: ElementRef;
  @ViewChild('sizetext', {static:true}) sizetext: ElementRef;
  @ViewChild('greenIndicator', {static: false}) greenIndicator: ElementRef;

  ngAfterViewInit(): void {
    this.sizeRef.nativeElement.style.width = this.width;
    this.sizeRef.nativeElement.style.height = this.height;
    this.sizetext.nativeElement.style.margin = this.margin;

    this.sizetext.nativeElement.style.paddingLeft = this.paddingleft;
    this.sizetext.nativeElement.style.fontSize = this.fontsize;
    this.sizetext.nativeElement.style.top = this.top;

    this.getMyVolume();
  }

  setGreenIndicator(myVolume: number){
    if(myVolume == undefined)
      myVolume = 1;
    this.greenIndicator.nativeElement.style.transform = 
        'scaleY(' + (myVolume * 2 / 100) + ')'; 
  };

  getMyVolume(){
    this.setGreenIndicator(2);
  };


  constructor() {}

  ngOnInit(): void {
    
  }
}