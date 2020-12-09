import { TvGridService } from "./../../../global/services/tvgrid/tvgrid.service";
import { TvGrid } from "./../../components/tvgrid-list/tvgrid";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "table-tvgrid",
  templateUrl: "./table-tvgrid.component.html",
  styleUrls: ["./table-tvgrid.component.css"],
})
export class TableTVgridComponent implements OnInit {
  grids: TvGrid[];
  backgrounds: string[];
  selected: boolean;
  constructor(private tvgridService: TvGridService) {}

  ngOnInit(): void {
    this.initializeArrays();
    this.tvgridService.getAllTable().subscribe((data) => {
      this.grids = data as TvGrid[];
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

  select(id) {
    this.selected = id;
    for (var i = 0; i < this.backgrounds.length; i++) {
      if (id == i) this.backgrounds[i] = "../assets/table-tvgrid/chosen.png";
      else this.backgrounds[i] = "../assets/table-tvgrid/notChosen.png";
    }
  }
}
