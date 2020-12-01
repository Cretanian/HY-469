import { Component, OnInit, Input } from '@angular/core';
import { dropdownOption } from '../dropdown-menu/dropdown-option'

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name:string;
  @Input() dropdownOpen: boolean;
  @Input() dropdownOptions: dropdownOption[];

  constructor() { }

  ngOnInit(): void {
    this.name = "Default Device";
    this.dropdownOpen = false;
  }

}
