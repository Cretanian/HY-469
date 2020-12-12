import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/global/services/participants/participants.service';

@Component({
  selector: 'participants-tv',
  templateUrl: './participants-tv.component.html',
  styleUrls: ['./participants-tv.component.css']
})
export class ParticipantsTVComponent implements OnInit {

  participantsTV: Contact[];
  helper: Contact[];
  Team_name:string;
  constructor(private contactsService: ParticipantsService) { }

  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.contactsService.getAll().subscribe(data => {
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
  constructor(name:string,src2:string){
    this.name = name;
    this.src2 =src2;
  }
}
