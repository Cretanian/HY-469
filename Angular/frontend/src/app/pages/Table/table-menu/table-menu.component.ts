import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table-menu",
  templateUrl: "./table-menu.component.html",
  styleUrls: ["./table-menu.component.css"],
})
export class TableMenuComponent implements OnInit {
  @Input() enableParticipantSpawn: boolean;
  tvGridWindowSpawned: boolean;
  filesWindowSpawned: boolean;
  display: boolean;
  muted: boolean;
  iconMuted: string;

  constructor() {
    this.muted = false;
    this.iconMuted = "../../assets/table/buttonMute.png";
    this.display = true;
    this.enableParticipantSpawn = true;
  }

  ngOnInit(): void {
    this.tvGridWindowSpawned = false;
    this.enableParticipantSpawn = true;
    this.filesWindowSpawned = false;
  }

  //Button Functions

  buttonSpawnParticipants() {
    this.display = false;
    this.enableParticipantSpawn = false;
  }

  buttonSpawnFiles() {
    this.display = false;
    this.filesWindowSpawned = true;
  }

  buttonDeSpawnFiles() {
    this.display = false;
    this.filesWindowSpawned = false;
  }

  buttonSpawnTvGrid() {
    this.display = false;
    this.tvGridWindowSpawned = true;
  }

  buttonDespawnTvGrid() {
    this.tvGridWindowSpawned = false;
  }

  buttonMute() {
    this.muted = !this.muted;
    if (this.muted == true)
      this.iconMuted = "../../assets/table/buttonUnmute.png";
    else this.iconMuted = "../../assets/table/buttonMute.png";
  }

  spawnMenu() {
    this.display = true;
  }

  despawnMenu() {
    this.display = false;
  }

  receiveDisplayParticipantEvent(participantsIsDisplayed: boolean) {
    this.enableParticipantSpawn = !this.enableParticipantSpawn;
  }
}
