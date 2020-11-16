import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-incoming-call',
  templateUrl: './tv-incoming-call.component.html',
  styleUrls: ['./tv-incoming-call.component.css']
})
export class TVIncomingCallComponent implements OnInit {

  @Input('group_image') group_image : string;
  @Input('group_name') group_name : string;
  constructor() { }

  ngOnInit(): void {
  }

}
