import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-button',
  templateUrl: './teams-button.component.html',
  styleUrls: ['./teams-button.component.css']
})
export class TeamsButtonComponent implements OnInit {

  @Input('icon') iconSrc: string;
  @Input('redirect') redirect: string;
  @Input('groupName') groupName: string;

  constructor() {
    if(this.iconSrc == undefined)  
      this.iconSrc = '../../assets/steli.png'

    if(this.groupName == undefined)
      this.groupName = 'ZoomE'
  }

  ngOnInit(): void {
  }

  myFunction(){
    //to do smthing
  }

}
