import { SocketsService } from "src/app/global/services";
import { ParticipantsService } from "./../../../global/services/participants/participants.service";
import { participant } from "src/app/pages/components/utils/participant";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-participants-mobile",
  templateUrl: "./participants-mobile.component.html",
  styleUrls: ["./participants-mobile.component.css"],
})
export class ParticipantsMobileComponent implements OnInit {
  participants: Participant[];
  helper: Participant[];
  Team_name:string;

  constructor(
    private _location: Location,
    private participantsService: ParticipantsService,
    private socketService: SocketsService
  ) {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    this.participantsService.getAll().subscribe((data) => {
      this.helper = data as Participant[];
      this.participants = [];
      for(let i = 0; i < this.helper.length; i++){
        if(this.helper[i].team == this.Team_name){
          this.participants.push(new Participant(this.helper[i].name, this.helper[i].src2))
        }
      }
    });

    this.socketService
      .syncMessages("participants/change")
      .subscribe((event) => {
        this.loadParticipants();
      });
  }

  loadParticipants() {
    this.participantsService.getAll().subscribe((data) => {
      this.participants = data as Participant[];
      console.log(this.participants);
    });
  }
}

export class Participant{
  name:string;
  src1:string;
  src2: string;
  src3: string;
  team: string;
  isMuted: boolean;
  constructor(name:string,team:string){
    this.name = name;
    this.team =team;
  }
}
