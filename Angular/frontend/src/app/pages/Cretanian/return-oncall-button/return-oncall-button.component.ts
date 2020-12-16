import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-return-oncall-button',
  templateUrl: './return-oncall-button.component.html',
  styleUrls: ['./return-oncall-button.component.scss']
})
export class ReturnOncallButtonComponent implements OnInit {

  @Input() up:boolean;
  constructor() { 
  }

  ngOnInit(): void {
    if(this.up == undefined){
      this.up = true;
    }
  }

}
