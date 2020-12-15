import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/global/services/participants/participants.service';
import { participant } from "src/app/pages/components/utils/participant";

@Component({
  selector: 'app-many-users',
  templateUrl: './many-users.component.html',
  styleUrls: ['./many-users.component.css']
})
export class ManyUsersComponent implements OnInit {
  Team_name: string;
  helper: participant[];
  participants: participant[];
  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.participantsService.getAll().subscribe((data) => {
      this.helper = data as participant[];
      this.participants = new Array();
      for(let i = 0; i < this.helper.length; i++){
        if(this.helper[i].team == this.Team_name){
          this.participants.push(new participant(this.helper[i].name, this.helper[i].src2, this.helper[i].isMuted,this.helper[i].volume))
        }
      }
    });
  }

}
