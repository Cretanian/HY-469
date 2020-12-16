import { ParticipantsService } from "./../../../../global/services/participants/participants.service";
import { participant } from "src/app/pages/components/utils/participant";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SocketsService } from "src/app/global/services";

@Component({
  selector: "table-participants",
  templateUrl: "./table-participants.component.html",
  styleUrls: ["./table-participants.component.css"],
})
export class TableParticipantsComponent implements OnInit {
  selectedName: string;
  participants: participant[];
  @Output() participantEvent = new EventEmitter<string>();

  constructor(
    private participantsService: ParticipantsService,
    private socketService: SocketsService
  ) {}

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

  participantClicked(name: string) {
    this.participantEvent.emit(name);
    if (name == this.selectedName) this.selectedName = undefined;
    else this.selectedName = name;
  }

  loadParticipants() {
    this.participantsService.getAll().subscribe((data) => {
      this.participants = data as participant[];
    });
  }
}
