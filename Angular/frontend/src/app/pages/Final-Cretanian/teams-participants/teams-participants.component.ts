import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ParticipantsService } from 'src/app/global/services/participants/participants.service';

@Component({
  selector: 'ami-fullstack-teams-participants',
  templateUrl: './teams-participants.component.html',
  styleUrls: ['./teams-participants.component.scss']
})
export class TeamsParticipantsComponent implements OnInit {
  
  Team_name: string;
  helper: participant[];
  participants: Contact[];

  constructor(private _location: Location,private _Activatedroute:ActivatedRoute, private contactsService: ParticipantsService) { 
    this.Team_name = this._Activatedroute.snapshot.paramMap.get("team_name");
  }

  ngOnInit(): void {
    this.contactsService.getAll().subscribe(data => {
      this.helper = data as participant[];
      console.log(this.helper);
        this.participants = new Array();
        for(let i = 0; i < this.helper.length; i++)
        {
          if(this.helper[i].team == this.Team_name )
          {
            this.participants.push(new Contact(this.helper[i].name,this.helper[i].src2));
          }
        }
    });
  }

  backClicked() {
    this._location.back();
  }
}



export class Contact{
  name:string;
  srcProfile:string;
  isFavourite: boolean;
  constructor(name:string,srcProfile:string){
    this.name = name;
    this.srcProfile =srcProfile;
  }
}

export class participant{
  name:string;
  src1:string;
  src2: string;
  src3: string;
  team: string;
}
