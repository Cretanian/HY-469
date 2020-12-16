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
  participants: participant[];
  helper: participant[];
  Team_name: string;

  constructor(
    private _location: Location,
    private participantsService: ParticipantsService,
    private socketService: SocketsService
  ) {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.participantsService.getAll().subscribe((data) => {
      this.helper = data as participant[];
      this.participants = new Array();
      for (let i = 0; i < this.helper.length; i++) {
        if (this.helper[i].team == this.Team_name) {
          this.participants.push(
            new participant(
              this.helper[i].name,
              this.helper[i].src2,
              this.helper[i].isMuted,
              this.helper[i].volume,
              this.helper[i].prevVolume
            )
          );
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
      this.participants = data as participant[];
      console.log(this.participants);
    });
  }
}
