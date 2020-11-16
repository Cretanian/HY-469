import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-volume-editor',
  templateUrl: './generic-volume-editor.component.html',
  styleUrls: ['./generic-volume-editor.component.css']
})
export class GenericVolumeEditorComponent implements OnInit {

  @Input("slider-label") label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
