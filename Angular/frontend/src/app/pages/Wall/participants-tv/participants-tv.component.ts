import { Component, OnInit } from "@angular/core";
import { ParticipantsService } from "src/app/global/services/participants/participants.service";
import { participant } from "src/app/pages/components/utils/participant";

@Component({
  selector: "participants-tv",
  templateUrl: "./participants-tv.component.html",
  styleUrls: ["./participants-tv.component.css"],
})
export class ParticipantsTVComponent implements OnInit {
  participantsTV: participant[];
  helper: participant[];
  Team_name: string;
  constructor(private contactsService: ParticipantsService) {}

  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.contactsService.getAll().subscribe((data) => {
      this.helper = data as participant[];
      this.participantsTV = new Array();
      for (let i = 0; i < this.helper.length; i++) {
        if (this.helper[i].team == this.Team_name) {
          this.participantsTV.push(
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
  }
}
