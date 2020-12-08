import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name:string;
  @Input() dropdownOpen: boolean;
  @Input() dropdownOptions: dropdownOption[];

  constructor() {}

  ngOnInit(): void {
    this.name = "Default Device";
    this.dropdownOpen = false;
  }

  set_name(device_name:string){
    this.name = device_name;
  }
}

class dropdownOption{
  name: string;
}