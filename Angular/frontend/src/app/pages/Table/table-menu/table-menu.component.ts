import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-table-menu",
  templateUrl: "./table-menu.component.html",
  styleUrls: ["./table-menu.component.css"],
})
export class TableMenuComponent implements OnInit {
  @Input() enableParticipantSpawn: boolean;
  tvGridWindowSpawned: boolean;
  display: boolean;
  muted: boolean;
  iconMuted: string;
  @Input() as: string;
  carouselLeftIndex: number;
  carousel: any;

  constructor() {
    this.muted = false;
    this.iconMuted = "../../assets/table/buttonMute.png";
    this.display = true;
    this.enableParticipantSpawn = true;
  }

  ngOnInit(): void {
    this.tvGridWindowSpawned = false;
    this.enableParticipantSpawn = true;
    this.carouselLeftIndex = 0;
    this.initializeCarousel();
    this.displayCarousel(3);
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

  incrementIndex(index: number) {
    if (index == 5) index = 0;
    else index++;
    return index;
  }
  decrementIndex(index: number) {
    if (index == 0) index = 5;
    else index--;
    return index;
  }

  initializeCarousel() {
    this.carousel = new Array(6);
    for (var i = 0; i < this.carousel.length; i++) {
      this.carousel[i] = carouselNode(false);
      this.carousel[i].order = i;
    }
    for (var i = 0; i < this.carousel.length - 1; i++) {
      this.carousel[i].next = this.carousel[i + 1];
    }
    this.carousel[this.carousel.length - 1].next = this.carousel[0];
    console.log(this.carousel[0]);
  }

  displayCarousel(numberToDisplay: number) {
    for (var i = 0; i < this.carousel.length; i++) {
      this.carousel[i].display = false;
    }
    var j = this.carouselLeftIndex;
    var runner = this.carousel[j];
    for (var i = 0; i < numberToDisplay; i++) {
      runner.display = true;
      runner.order = i + 1;
      runner = runner.next;
    }
  }

  carouselLeft() {
    this.carouselLeftIndex = this.decrementIndex(this.carouselLeftIndex);
    this.displayCarousel(3);
  }
  carouselRight() {
    this.carouselLeftIndex = this.incrementIndex(this.carouselLeftIndex);
    this.displayCarousel(3);
  }
}

function carouselNode(display: boolean) {
  var node = { display: true, next: Object, order: 0 };
  node.display = display;
  return node;
}
