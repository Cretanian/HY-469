import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name:string;
  @Input() dropdownOpen: boolean;
  @Input() dropdownOptions: dropdownOption[];
  @Output('selectionClicked') selectionClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.dropdownOpen = false;
  }

  set_name(device_name:string){
    this.name = device_name;
    this.selectionClicked.emit(device_name);
  }
}

class dropdownOption{
  name: string;
}