import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name:string;
  @Input() dropdownOpen: boolean;
  constructor() { }

  ngOnInit(): void {
    this.name = "Samsung TV";
    this.dropdownOpen = false;
  }

}
