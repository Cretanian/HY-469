import { Component, OnInit } from "@angular/core";
import { SocketsService } from "src/app/global/services";
import { ParticipantsService } from "src/app/global/services/participants/participants.service";
import { participant } from "src/app/pages/components/utils/participant";

@Component({
  selector: "tv-master",
  templateUrl: "./tv-master.component.html",
  styleUrls: ["./tv-master.component.scss"],
})
export class TvMasterComponent implements OnInit {
  Team_name: string;
  helper: participant[];
  participants: participant[];

  constructor(
    private socketService: SocketsService,
    private participantsService: ParticipantsService
  ) {}

  grid: number = 3;
  isMouseHovering = false;

  ngOnInit(): void {
    this.socketService.syncMessages("tv/grid").subscribe((event) => {
      console.log("Event arrived! Event message: " + event.message);
      this.grid = event.message;
    });

    this.Team_name = "YeetFleet";
    this.loadParticipants();

    this.socketService
      .syncMessages("participants/change")
      .subscribe((event) => {
        this.loadParticipants();
      });

    this.loadParticipants();
  }

  loadParticipants() {
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
              this.helper[i].volume
            )
          );
        }
      }
    });
  }
}
