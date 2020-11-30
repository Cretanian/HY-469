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

  ngOnInit(): void {
    this.grids = [
      {
        title: "Grid 1",
        src: './assets/tv-grid/1.png'
      },
      {
        title: "Grid 2",
        src: './assets/tv-grid/1-2.png'
      },
      {
        title: "Grid 3",
        src: "./assets/tv-grid/3-3.png"
      },
    ]
  }

}
