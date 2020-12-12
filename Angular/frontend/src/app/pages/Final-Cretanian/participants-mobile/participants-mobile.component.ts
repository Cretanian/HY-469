import { ParticipantsService } from './../../../global/services/participants/participants.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-participants-mobile',
  templateUrl: './participants-mobile.component.html',
  styleUrls: ['./participants-mobile.component.css']
})
export class ParticipantsMobileComponent implements OnInit {
  participantsTV: Contact[];
  helper: Contact[];
  Team_name:string;

  constructor(private _location: Location, private participantsService: ParticipantsService) 
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.participantsService.getAll().subscribe(data => {
      this.helper = data as Contact[];
      this.participantsTV = new Array();
      for(let i = 0; i < this.helper.length; i++)
      {
          if(this.helper[i].team == this.Team_name )
          {
            this.participantsTV.push(new Contact(this.helper[i].name,this.helper[i].src2));
          }
      }
    });
  }

}

export class Contact{
  name:string;
  src1:string;
  src2: string;
  src3: string;
  team: string;
  constructor(name:string,team:string){
    this.name = name;
    this.team =team;
  }
}
