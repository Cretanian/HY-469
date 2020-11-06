import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-button',
  templateUrl: './teams-button.component.html',
  styleUrls: ['./teams-button.component.css']
})
export class TeamsButtonComponent implements OnInit {

  @Input('image_url') url: string;
  @Input('redirect') redirect: string;
  @Input('tag') groop_name: string;
  constructor() {
    
  }

  ngOnInit(): void {
  }

  myFunction(){
    //to do smthing
  }

}
