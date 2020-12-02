import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-tv-grid-mobile',
  templateUrl: './tv-grid-mobile.component.html',
  styleUrls: ['./tv-grid-mobile.component.css']
})
export class TVGridMobileComponent implements OnInit {

  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

}
