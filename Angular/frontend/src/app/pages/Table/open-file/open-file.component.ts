import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ami-fullstack-open-file",
  templateUrl: "./open-file.component.html",
  styleUrls: ["./open-file.component.scss"],
})
export class OpenFileComponent implements OnInit {
  @Input() display: boolean;
  @Input() name: string;
  @Output() displayEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.name = "cat.pdf"; //remove
    this.display = true; //remove
  }

  emitDisplayEvent() {
    this.display = false;
    this.displayEvent.emit(this.display);
  }
}
