import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {

  a: boolean;
  constructor() { }

  ngOnInit(): void {
    this.a = true;
  }

}
