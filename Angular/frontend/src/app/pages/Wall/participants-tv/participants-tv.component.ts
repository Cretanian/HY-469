import { Component, OnInit, Input } from "@angular/core";
import { participant } from "src/app/pages/components/utils/participant";

@Component({
  selector: "participants-tv",
  templateUrl: "./participants-tv.component.html",
  styleUrls: ["./participants-tv.component.css"],
})
export class ParticipantsTVComponent implements OnInit {
  @Input() participants: participant[];

  constructor() { }

  ngOnInit(): void {
  }
}
