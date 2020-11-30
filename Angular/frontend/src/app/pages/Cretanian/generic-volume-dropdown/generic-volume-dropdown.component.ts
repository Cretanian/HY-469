import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-volume-dropdown',
  templateUrl: './generic-volume-dropdown.component.html',
  styleUrls: ['./generic-volume-dropdown.component.css']
})
export class GenericVolumeDropdownComponent implements OnInit {
  @Input("dropdown-label") label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
