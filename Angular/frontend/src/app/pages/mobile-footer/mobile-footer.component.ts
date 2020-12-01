import { Component, OnInit } from '@angular/core';
import { GButtonComponent } from '../g-button/g-button.component';

@Component({
  selector: 'mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.css']
})

export class MobileFooterComponent implements OnInit {

  morePressed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enableMore(): void{
    this.morePressed = true;
  }  

  disableMore(): void{
    this.morePressed =  false;
  }
}