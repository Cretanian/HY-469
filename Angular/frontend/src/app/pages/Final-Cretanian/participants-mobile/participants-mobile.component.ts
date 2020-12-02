import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-participants-mobile',
  templateUrl: './participants-mobile.component.html',
  styleUrls: ['./participants-mobile.component.css']
})
export class ParticipantsMobileComponent implements OnInit {

  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

}
