import { ParticipantsService } from "./../../../global/services/participants/participants.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "participant",
  templateUrl: "./participant.component.html",
  styleUrls: ["./participant.component.css"],
})
export class ParticipantComponent implements OnInit {
  @Input() name: string;
  @Input() srcWall: string;
  @Input() src1: string;
  @Input() src2: string;
  @Input() src3: string;
  @Input() maxSize: number;
  @Input() muted: boolean;

  constructor(private participantService: ParticipantsService) {}

  ngOnInit(): void {}

  setMaxSize(width: number) {
    this.maxSize = width * (55.27 / 100) * (30 / 720);
  }

  format(name: string): string {
    this.maxSize = Math.trunc(this.maxSize);
    let decr = name.length - this.maxSize;
    if (decr < 2) decr = 3;

    if (name.length > this.maxSize)
      return name.slice(0, name.length - decr) + "...";
    else return name;
  }

  mute() {
    this.participantService.mute(this.name);
  }
}
