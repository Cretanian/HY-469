import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-table-menu",
  templateUrl: "./table-menu.component.html",
  styleUrls: ["./table-menu.component.css"],
})
export class TableMenuComponent implements OnInit {
  @Input() enableParticipantSpawn: boolean;
  @ViewChild("menu") menuElementRef: ElementRef;
  tvGridWindowSpawned: boolean;
  display: boolean;
  muted: boolean;
  iconMuted: string;

  @Input() as: string;

  constructor() {
    this.muted = false;
    this.iconMuted = "../../assets/table/buttonMute.png";
    this.display = true;
    this.enableParticipantSpawn = true;
  }

  ngOnInit(): void {
    this.tvGridWindowSpawned = false;
    this.enableParticipantSpawn = true;
  }

  //Button Functions

  buttonSpawnParticipants() {
    this.display = false;
    this.enableParticipantSpawn = false;
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

  spawnMenu($event) {
    this.display = true;
    console.log($event.clientX);
    console.log($event.clientY);
  }

  despawnMenu($event) {
    this.display = false;
  }

  receiveDisplayParticipantEvent(participantsIsDisplayed: boolean) {
    this.enableParticipantSpawn = !this.enableParticipantSpawn;
  }
}
