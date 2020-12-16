import { Component, OnInit } from "@angular/core";
import { PinboardService } from "src/app/global/services/wall/pinboard.service";
import { Message } from "../../Final-Cretanian/conversations/conversations.component";
import { Pin } from "../pinned/Pin";
import { SocketsService } from "src/app/global/services";

@Component({
  selector: "app-pinboard",
  templateUrl: "./pinboard.component.html",
  styleUrls: ["./pinboard.component.css"],
})
export class PinboardComponent implements OnInit {
  pins: Pin[];

  constructor(
    private pinboardService: PinboardService,
    private socketService: SocketsService
  ) {}

  ngOnInit(): void {
    this.loadPins();

    this.socketService.syncMessages("pinboard/change").subscribe((event) => {
      this.loadPins();
    });
  }

  loadPins() {
    this.pinboardService.getAll().subscribe((rawData) => {
      this.pins = [];
      let data: Pin[] = rawData as Pin[];
      data.forEach((element: Pin) => {
        console.log("user: " + element.user);

        //Fix path if image.
        if (element.type == "image")
          element.value = "../../../../assets/wall/" + element.value;

        this.pins.push(element);
      });
    });
  }
}
