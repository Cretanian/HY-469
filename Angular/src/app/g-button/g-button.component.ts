import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'g-button',
  templateUrl: './g-button.component.html',
  styleUrls: ['./g-button.component.css']                      
})
export class GButtonComponent {
  //Important Parameters
  @Input('background') backgroundSrc: string;
  @Input('icon') iconSrc: string;
  @Input('name') name: string;

  //Extra Parameters
  @Input('fontColor') fontColor: string;
  @Input('fontSize') fontSize: number;
  @Input('iconSize') iconSize: number;
  @Input('backgroundSize') backgroundSize: number;

  //Element References
  @ViewChild('background') backgroundRef: ElementRef;
  @ViewChild('icon') iconRef: ElementRef;
  @ViewChild('nameRef') nameRef: ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.defineBackground();  
    this.setIconSize();
    this.setBackgroundSize();
    this.setFontColor();
    this.setFontSize();
  }

  setIconSize(): void{
    if(this.iconSize != undefined){
      this.iconRef.nativeElement.style.width = this.toPixel(this.iconSize);
      this.iconRef.nativeElement.style.heigth = 'auto';
    }
  }

  setBackgroundSize(): void{
    if(this.backgroundSize != undefined){
      this.backgroundRef.nativeElement.style.width = this.toPixel(this.backgroundSize);
      this.backgroundRef.nativeElement.style.heigth = 'auto';
    }
  }

  setIconOffset(): void{
    if(this.backgroundSrc == undefined){
      //No background, so the image should interact with events.
      this.backgroundRef.nativeElement.remove();
      this.iconRef.nativeElement.style.position = 'relative';
      this.iconRef.nativeElement.pointerEvents = 'initial';

      return;
    }
    else{
      //The background will interact on events.
      this.iconRef.nativeElement.pointerEvents = 'none';
    }

    let backgroundWidth = this.backgroundSize || this.backgroundRef.nativeElement.naturalWidth;
    let backgroundHeigth = this.backgroundSize ||this.backgroundRef.nativeElement.naturalHeight;
    let iconWidth = this.iconSize || this.iconRef.nativeElement.naturalWidth;
    let iconHeigth =this.iconSize || this.iconRef.nativeElement.naturalHeight;

    console.log('width ' + iconWidth);
    console.log('heigth ' + iconHeigth);

    var iconOffsetX = backgroundWidth/2 + iconWidth/2;
    var iconOffsetY = backgroundHeigth/2 - iconHeigth/2;

    //OffsetX
    this.iconRef.nativeElement.style.transform 
          = "translate(" + this.toPixel(-iconOffsetX) + ", " + this.toPixel(iconOffsetY) + ")";
  }

  setFontSize(){
    if(this.fontSize != undefined){
      this.nameRef.nativeElement.style.fontSize = this.toPixel(this.fontSize);
    }
  }

  setFontColor(): void{
    if(this.fontColor != undefined){
      this.nameRef.nativeElement.style.color = this.fontColor;
    }
  }

  defineBackground(){
    console.log(this.backgroundSrc);
    if(this.backgroundSrc == undefined){
      //No background, so the image should interact with events.
      this.backgroundRef.nativeElement.remove();
      this.iconRef.nativeElement.style.position = 'relative';
      this.iconRef.nativeElement.pointerEvents = 'initial';
    }
    else{
      console.log(this.iconSrc);
      // this.iconRef.nativeElement.pointerEvents = 'none';
      this.iconRef.nativeElement.style.pointerEvents = 'none';
    }
  }

  //Util
  toPixel = (arg: number): string => {
    return (arg + "px");
  } 

}
