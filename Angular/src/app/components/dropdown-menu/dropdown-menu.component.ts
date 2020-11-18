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
    if(this.options == undefined){
      console.log(this.options);
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

}