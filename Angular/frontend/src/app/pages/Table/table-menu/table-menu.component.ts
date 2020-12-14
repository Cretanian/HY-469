import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "app-table-menu",
  templateUrl: "./table-menu.component.html",
  styleUrls: ["./table-menu.component.css"],
})
export class TableMenuComponent implements OnInit {
  @Input() display: boolean;
  @Output() despawnEvent = new EventEmitter<void>();
  @Input() menuCoordX: number;
  @Input() menuCoordY: number;
  @Input() tvGridCoordX: number;
  @Input() tvGridCoordY: number;
  @Input() filesCoordX: number;
  @Input() filesCoordY: number;
  @Input() participantsCoordX: number;
  @Input() participantsCoordY: number;
  @Input() enableParticipantSpawn: boolean;
  tvGridWindowSpawned: boolean;
  filesWindowSpawned: boolean;
  fileIsOpen: boolean;

  muted: boolean;
  iconMuted: string;

  carouselLeftIndex: number;
  carousel: any;

  constructor() {
    this.muted = false;
    this.iconMuted = "../../assets/table/buttonMute.png";
    this.display = true;
    this.enableParticipantSpawn = true;
  }

  ngOnInit(): void {
    this.menuCoordX = 0;
    this.menuCoordY = 0;
    this.tvGridWindowSpawned = false;
    this.enableParticipantSpawn = true;
    this.filesWindowSpawned = false;
    this.carouselLeftIndex = 3;
    this.initializeCarousel();
    this.displayCarousel(3);
    this.fileIsOpen = false;
  }

  //Button Functions

  buttonSpawnParticipants() {
    this.despawnMenu();
    this.participantsCoordX = this.menuCoordX;
    this.participantsCoordY = this.menuCoordY;
    this.enableParticipantSpawn = false;
  }

  buttonSpawnFiles() {
    this.despawnMenu();
    this.filesCoordX = this.menuCoordX;
    this.filesCoordY = this.menuCoordY;
    this.filesWindowSpawned = true;
  }

  buttonDespawnFiles() {
    this.filesWindowSpawned = false;
    this.fileIsOpen = false;
  }

  despawnXButton() {
    console.log(this.fileIsOpen);
    this.fileIsOpen = true;
  }

  buttonSpawnTvGrid() {
    this.despawnMenu();
    this.tvGridCoordX = this.menuCoordX;
    this.tvGridCoordY = this.menuCoordY;
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
  }

  despawnMenu() {
    this.despawnEvent.emit();
  }

  receiveDisplayParticipantEvent(participantsIsDisplayed: boolean) {
    this.enableParticipantSpawn = !this.enableParticipantSpawn;
  }

  incrementIndex(index: number) {
    if (index == this.carousel.length - 1) index = 0;
    else index++;
    return index;
  }
  decrementIndex(index: number) {
    if (index == 0) index = this.carousel.length - 1;
    else index--;
    return index;
  }

  initializeCarousel() {
    this.carousel = new Array(5);
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

  returnTopTvGrid() {
    if (this.menuCoordY < 596) {
      var y = this.menuCoordX;
      if (y < 60) return 70 + "px";
      console.log("Y = " + this.menuCoordY);
      return y + "px";
    }
    var y = 1080 - this.tvGridCoordY;
    if (y > 168) y = y - (y - 168);
    return y + "px";
  }
  returnRightTvGrid() {
    if (this.menuCoordY < 596) {
      var x = this.menuCoordY;
      if (y < 440) return 140 + "px";
      var y = 595 - y;
      console.log("X = " + this.menuCoordX);
      return y + "px";
    }
    var x = this.tvGridCoordX;
    if (x < 363) {
      var safeX = 1020;
      return safeX + "px";
    } else {
      var middleY = 1585 - 250 - x > 0 ? 1585 - 250 - x : 1585 - x;
      return middleY + "px";
    }
  }
  returnTopParticipants() {
    if (this.menuCoordY < 596) {
      var y = this.menuCoordX;
      if (y < 60) return 70 + "px";
      console.log("Y = " + this.menuCoordY);
      return y + "px";
    }
    var y = 1080 - this.participantsCoordY;
    if (y > 168) y = y - (y - 88);
    return y + "px";
  }
  returnRightParticipants() {
    if (this.menuCoordY < 596) {
      var x = this.menuCoordY;
      if (y < 440) return 140 + "px";
      var y = 595 - y;
      console.log("X = " + this.menuCoordX);
      return y + "px";
    }
    var x = this.participantsCoordX;
    if (x < 363) {
      var safeX = 1090;
      return safeX + "px";
    } else {
      var middleY = 1585 - 250 - x > 0 ? 1585 - 250 - x : 1585 - x;
      return middleY + "px";
    }
  }

  returnTopFiles() {
    if (this.menuCoordY < 596) {
      var y = this.menuCoordX;
      if (y < 60) return 70 + "px";
      console.log("Y = " + this.menuCoordY);
      return y + "px";
    }
    return 20 + "px";
  }
  returnRightFiles() {
    if (this.menuCoordY < 596) {
      var x = this.menuCoordY;
      if (y < 440) return 140 + "px";
      var y = 595 - y;
      console.log("X = " + this.menuCoordX);
      return y + "px";
    }
    var x = this.filesCoordX;
    if (x < 363) {
      var safeX = 1090;
      return safeX + "px";
    } else {
      var middleY = 1585 - 250 - x > 0 ? 1585 - 250 - x : 1585 - x;
      return middleY + "px";
    }
  }

  returnTop() {
    if (this.menuCoordY < 596) {
      if (this.menuCoordX < 60) return 70 + "px";
      return this.menuCoordX + "px";
    }

    if (this.menuCoordY < 750) {
      var y = 1080 - this.menuCoordY;
      return "" + (y - 280) + "px";
    } else return "" + 65 + "px";
  }
  returnRight() {
    if (this.menuCoordY < 596) {
      if (this.menuCoordY < 440) return 140 + "px";
      var y = 595 - this.menuCoordY;
      return y + "px";
    }
    var x = this.menuCoordX;
    if (x < 263) {
      return 1150 + "px";
    } else return (1585 - 250 - x > 0 ? 1585 - 250 - x : 1585 - x) + "px";
  }
}

function carouselNode(display: boolean) {
  var node = { display: true, next: Object, order: 0 };
  node.display = display;
  return node;
}
