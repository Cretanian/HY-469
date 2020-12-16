import { Component, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "final-table",
  templateUrl: "./final-table.component.html",
  styleUrls: ["./final-table.component.scss"],
})
export class FinalTableComponent implements OnInit {
  constructor() {}

  displayMenuUser: boolean[];
  spawnUserCoordinates: number[][];

  ngOnInit(): void {
    this.displayMenuUser = new Array(2);
    this.displayMenuUser[0] = false;
    this.displayMenuUser[1] = false;
    this.spawnUserCoordinates = new Array(2);
    for (var i = 0; i < this.spawnUserCoordinates.length; i++) {
      this.spawnUserCoordinates[i] = new Array(2);
    }
  }

  spawnMenu(userID: number, $event) {
    this.displayMenuUser[userID] = true;
    this.spawnUserCoordinates[userID][0] = $event.clientX;
    this.spawnUserCoordinates[userID][1] = $event.clientY;
  }
  despawnMenu(userID: number) {
    this.displayMenuUser[userID] = false;
  }
}
