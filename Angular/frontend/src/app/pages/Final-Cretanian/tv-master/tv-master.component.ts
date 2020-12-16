import { SelfInformationService } from "./../../../global/services/self-info/self-information.service";
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
  selfData;

  constructor(
    private socketService: SocketsService,
    private participantsService: ParticipantsService,
    private selfInformationService: SelfInformationService
  ) {}

  grid: number = -1;
  isMouseHovering = false;

  ngOnInit(): void {
    this.socketService.syncMessages("call/accept").subscribe((event) => {
      this.grid = 3;
    });

    this.socketService.syncMessages("tv/grid").subscribe((event) => {
      this.grid = event.message;
    });

    this.Team_name = "YeetFleet";
    this.loadParticipants();

    this.socketService
      .syncMessages("participants/change")
      .subscribe((event) => {
        this.loadParticipants();
      });

    this.socketService
      .syncMessages("selfInformation/change")
      .subscribe((event) => {
        this.loadSelfInfo();
      });

    this.loadParticipants();
    this.loadSelfInfo();
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
              this.helper[i].volume,
              this.helper[i].prevVolume
            )
          );
        }
      }
    });
  }

  loadSelfInfo() {
    this.selfInformationService.getAll().subscribe((data) => {
      this.selfData = data;
    });
  }

  muteSelf() {
    this.selfInformationService.muteSelf();
    this.isMouseHovering = false;
  }
}
