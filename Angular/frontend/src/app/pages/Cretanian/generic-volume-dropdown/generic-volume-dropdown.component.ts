import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-volume-dropdown',
  templateUrl: './generic-volume-dropdown.component.html',
  styleUrls: ['./generic-volume-dropdown.component.css']
})
export class GenericVolumeDropdownComponent implements OnInit {
  @Input("dropdown-label") label: string;
  @Input() dropdownOptions: dropdownOption[] ;
  @Output('selectionEvent') selectionEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectionEmitted(selection: string){
    console.log('pre last layer emit');
    this.selectionEmitter.emit(selection);
  }
}

class dropdownOption{
  name: string;
}
