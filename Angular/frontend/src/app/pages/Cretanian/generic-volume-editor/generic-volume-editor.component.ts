import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-volume-editor',
  templateUrl: './generic-volume-editor.component.html',
  styleUrls: ['./generic-volume-editor.component.css']
})
export class GenericVolumeEditorComponent implements OnInit {
  @Input("slider-label") label: string;
  maxSize: number;
  constructor() { }

  ngOnInit(): void {
  }
  
  setMaxSize(width: number) {
    this.maxSize = width * (40.27/100) * (30/720);
  }

  format(name: string): string {
    this.maxSize = Math.trunc(this.maxSize); 
    let decr = name.length - this.maxSize;
    if(decr < 2)
      decr = 3;

    if(name.length > this.maxSize)
      return name.slice(0, name.length-decr)+ "..."
    else
      return name;
  }

}
