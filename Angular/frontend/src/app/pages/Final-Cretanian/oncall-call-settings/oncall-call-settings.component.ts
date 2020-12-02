import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-oncall-call-settings',
  templateUrl: './oncall-call-settings.component.html',
  styleUrls: ['./oncall-call-settings.component.css']
})
export class OncallCallSettingsComponent implements OnInit {

  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

}
