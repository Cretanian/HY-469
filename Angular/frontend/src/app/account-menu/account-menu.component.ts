import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  @Input('name') name: string;

  constructor() { }

  ngOnInit(): void {
    if(name == undefined){
      this.name = 'undefiened'
    }
  }

}
