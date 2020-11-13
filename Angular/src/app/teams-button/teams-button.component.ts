import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-button',
  templateUrl: './teams-button.component.html',
  styleUrls: ['./teams-button.component.css']
})
export class TeamsButtonComponent implements OnInit {

  @Input('image') image: string;
  @Input('redirect') redirect: string;
  @Input('groop_name') groop_name: string;
  constructor() {
    
  }

  ngOnInit(): void {
  }

  myFunction(){
    //to do smthing
  }

}
