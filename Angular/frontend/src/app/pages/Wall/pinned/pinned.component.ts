import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Pin } from './Pin';

@Component({
  selector: 'pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss']
})
export class PinnedComponent implements OnInit {

  pin: Pin;

  @Input('user') user: string;
  @Input('type') type: string;
  @Input('value') value: any;
  @Input('comment') comment: any;

  constructor() { }

  ngOnInit(): void {
    this.pin = new Pin(this.user, this.comment, this.type, this.value);    
  }
}