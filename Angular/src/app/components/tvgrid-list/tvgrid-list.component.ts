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
        src: './assets/icons/TV Grid 1 Grid.png'
      },
      {
        title: "Grid 2",
        src: './assets/icons/TV Grid 1 Grid.png'
      },
      {
        title: "Grid 3",
        src: "./assets/icons/TV Grid 1 Grid.png"
      },
    ]
  }

}
