import { Component, Input, OnInit } from "@angular/core";
import { SocketsService } from "src/app/global/services";
import { ParticipantsService } from "src/app/global/services/participants/participants.service";

@Component({
  selector: "app-volume-slider",
  templateUrl: "./volume-slider.component.html",
  styleUrls: ["./volume-slider.component.css"],
})
export class VolumeSliderComponent implements OnInit {
  @Input() value: number;
  helper: number = 75;
  @Input("image_url") url: string;
  @Input() name: string;
  @Input() muted: boolean;
  constructor(
    private participantService: ParticipantsService,
    private socketService: SocketsService
  ) {}

  ngOnInit(): void {}

  mute() {
    this.participantService.mute(this.name);
    if (this.value != 0) {
      this.muted = !this.muted;
      this.helper = this.value;
      this.value = 0;
    } else {
      this.muted = !this.muted;
      this.value = this.helper;
    }
  }
  onDragEvent(event) {
    if (this.value === 0) {
      console.log("MUTED");
      this.participantService.mute(this.name);
    }
  }
}
