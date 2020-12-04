import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'ami-fullstack-controller-call-chat',
  templateUrl: './controller-call-chat.component.html',
  styleUrls: ['./controller-call-chat.component.scss']
})
export class ControllerCallChatComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }
}
