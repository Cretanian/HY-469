import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'g-button',
  templateUrl: './g-button.component.html',
  styleUrls: ['./g-button.component.css']                      
})
export class GButtonComponent {

  @Input('background') backgroundSrc: string;
  @Input('icon') iconSrc: string;
  @Input('name') name: string;
  @Input('nameColor') nameColor: string;

  @ViewChild('icon') iconRef: ElementRef;
  @ViewChild('nameRef') nameRef: ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.setNameColor();
    this.setIconOffset();
  }

  setNameColor(): void{
    if(this.nameColor != undefined){
      console.log(this.nameColor);
      this.nameRef.nativeElement.style.color = this.nameColor;
    }
  }

  setIconOffset(): void{
    var iconasd: HTMLElement = document.getElementById('icon');
    var background: HTMLImageElement = document.getElementById('background') as HTMLImageElement;

    var targetIcon: HTMLImageElement = new Image();
    targetIcon.src = this.iconSrc;
    var targetBackground: HTMLImageElement = new Image();
    targetBackground.src = this.backgroundSrc;

    var iconOffsetX = targetBackground.naturalWidth/2 + targetIcon.naturalWidth/2;
    var iconOffsetY = targetBackground.naturalHeight/2 - targetIcon.naturalHeight/2;

    //OffsetX
    this.iconRef.nativeElement.style.transform 
                = "translate(" + -iconOffsetX + "px, " + iconOffsetY + "px)";
  }
}
