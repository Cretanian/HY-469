import { Component, OnInit } from '@angular/core';
import {TvGrid} from './tvgrid';
import { TVService } from '../../../global/services/tv/tv.service'

@Component({
  selector: 'tvgrid-list',
  templateUrl: './tvgrid-list.component.html',
  styleUrls: ['./tvgrid-list.component.css']
})
export class TvgridListComponent implements OnInit {

  constructor(
    private tvService: TVService
  ) { }
  grids: TvGrid[];

  ngOnInit(): void {
    this.grids = [
      {
        title: "1 Main",
        grid: '1main',
        src: './assets/tv-grid/1.png'
      },
      {
        title: "1 Main + 2 Secondary",
        grid: '3main',
        src: './assets/tv-grid/1-2.png'
      },
      {
        title: "3x3",
        grid: '3x3',
        src: "./assets/tv-grid/3-3.png"
      },
    ]
  }

  changeTvGrid(tvGrid: string){
    this.tvService.changeGrid(tvGrid);
  }
}
