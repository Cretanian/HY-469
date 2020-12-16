import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-teams-button',
  templateUrl: './teams-button.component.html',
  styleUrls: ['./teams-button.component.css']
})
export class TeamsButtonComponent implements OnInit {

  @Input('icon') iconSrc: string;
  @Input('groupName') groupName: string;
  
 
  
  constructor() {
  
  }

  ngOnInit(): void {
  }

  myFunction(){
    //to do smthing
  }

}
