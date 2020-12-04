import { Component, OnInit } from '@angular/core';
import {TvGrid} from './tvgrid';

@Component({
  selector: 'tvgrid-list',
  templateUrl: './tvgrid-list.component.html',
  styleUrls: ['./tvgrid-list.component.css']
})
export class TvgridListComponent implements OnInit {

  constructor() { }
  grids: TvGrid[];
  selected: number;

  ngOnInit(): void {
    this.grids = [
      {
        title: "Grid 1",
        src: './assets/tv-grid/1.png',
        id: 0
      },
      {
        title: "Grid 2",
        src: './assets/tv-grid/1-2.png',
        id: 1
      },
      {
        title: "Grid 3",
        src: "./assets/tv-grid/3-3.png",
        id: 2
      },
    ]
    this.selected = 1;
  }

  changeSelected(id: number){
    this.selected = id;
    console.log("ID = " + id);
  }

}
