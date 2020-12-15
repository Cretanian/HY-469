import { TvGridService } from "./../../../global/services/tvgrid/tvgrid.service";
import { TvGrid } from "./../../components/tvgrid-list/tvgrid";
import { Component, OnInit } from "@angular/core";
import { SocketsService } from "src/app/global/services";
import { TVService } from "src/app/global/services/tv/tv.service";

@Component({
  selector: "table-tvgrid",
  templateUrl: "./table-tvgrid.component.html",
  styleUrls: ["./table-tvgrid.component.css"],
})
export class TableTVgridComponent implements OnInit {
  grids: TvGrid[];
  backgrounds: string[];
  selected: boolean;
  constructor(
    private tvgridService: TvGridService,
    private tvService: TVService,
    private socketService: SocketsService
  ) {}

  ngOnInit(): void {
    this.initializeArrays();
    this.tvgridService.getAllTable().subscribe((data) => {
      this.grids = data as TvGrid[];
    });

    this.socketService.syncMessages("tv/grid").subscribe((event) => {
      console.log("Event arrived! Event message: " + event.message);
      this.selectBackground(event.message);
    });
  }

  initializeArrays() {
    this.grids = new Array(5);
    for (var i = 0; i < this.grids.length; i++) {
      this.grids[i] = new TvGrid();
    }
    this.backgrounds = new Array(5);
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i] = "../assets/table-tvgrid/notChosen.png";
    }
  }

  selectBackground(id){
    for (var i = 0; i < this.backgrounds.length; i++) {
      if (id == i) this.backgrounds[i] = "../assets/table-tvgrid/chosen.png";
      else this.backgrounds[i] = "../assets/table-tvgrid/notChosen.png";
    }
  }

  select(id) {
    this.selected = id;
    this.selectBackground(id);

    this.tvService.changeGrid(id);
  }
}
