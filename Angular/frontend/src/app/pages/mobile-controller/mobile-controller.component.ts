import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MobileControllerMoreComponent } from "../mobile-controller-more/mobile-controller-more.component";
import { SocketsService } from "src/app/global/services";
import { SelfInformationService } from "./../../global/services/self-info/self-information.service";
@Component({
  selector: "mobile-controller",
  templateUrl: "./mobile-controller.component.html",
  styleUrls: ["./mobile-controller.component.css"],
})
export class MobileControllerComponent implements OnInit {
  @Input("callName") callName: string;
  team_name: string;
  moreOpen: boolean = false;
  selfData;
  constructor(
    private socketService: SocketsService,
    private selfInformationService: SelfInformationService
  ) {
    this.team_name = "YeetFleet"; //to be changed
  }

  ngOnInit(): void {
    this.socketService
      .syncMessages("selfInformation/change")
      .subscribe((event) => {
        this.loadSelfInfo();
      });

    this.loadSelfInfo();
  }

  enableMore(): void {
    this.moreOpen = true;
  }

  disableMore(): void {
    console.log("receive");
    this.moreOpen = false;
  }

  loadSelfInfo() {
    this.selfInformationService.getAll().subscribe((data) => {
      this.selfData = data;
    });
  }

  muteSelf() {
    this.selfInformationService.muteSelf();
  }
}
