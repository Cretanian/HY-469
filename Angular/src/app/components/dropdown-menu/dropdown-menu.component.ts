import { dropdownOption } from './dropdown-option';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  @Input() options: dropdownOption[];
  constructor() { }

  ngOnInit(): void {
    this.options = [
      {
        name:"Samsung TV"
      },
      {
        name:"Speaker Default"
      },
      {
        name:"Speaker (1)"
      },
    ]
  }

}

function fun(){
  console.log("asdads");
}
