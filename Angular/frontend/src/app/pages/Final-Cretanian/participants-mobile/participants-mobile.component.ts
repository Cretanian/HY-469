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
      this.participants = data as participant[];
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
