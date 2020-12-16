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
  @Input("image_url") url: string;
  @Input() name: string;
  @Input() muted: boolean;
  @Input() prevVolume: number;
  changeValue: number;
  constructor(
    private participantService: ParticipantsService,
    private socketService: SocketsService
  ) {}

  ngOnInit(): void {
    this.changeValue = this.value;
    setInterval(this.sendVolumeToBase, 1000);
  }

  mute() {
    this.prevVolume = this.value;
    this.participantService.mute(this.name);
  }

  onDragEvent(event) {}

  sendVolumeToBase = () => {
    if (this.changeValue == this.value) return;
    else {
      this.changeValue = this.value;
      setTimeout(() => {
        if (this.changeValue == this.value)
          this.participantService.changeVolume(
            this.prevVolume,
            this.value,
            this.name
          );
      }, 100);
    }
  };
}
