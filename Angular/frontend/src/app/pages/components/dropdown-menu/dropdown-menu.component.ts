import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  @Input() options: dropdownOption[];
  device_name:string;
  @Output("clicked_event") clicked_emitter:EventEmitter<string> = new EventEmitter<string> ();

  constructor() {}
 
  ngOnInit(): void {
    if(this.options == undefined){
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

  get_name(name:string){
    this.device_name = name;
    this.clicked_emitter.emit(this.device_name);
  }

}

class dropdownOption{
  name: string;
}