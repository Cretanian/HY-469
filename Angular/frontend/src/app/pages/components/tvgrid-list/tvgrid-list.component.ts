import { TvGridService } from './../../../global/services/tvgrid/tvgrid.service';
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
    private tvService: TVService,
    private tvgridService: TvGridService
  ) { }
  
  grids: TvGrid[];
  selected: number;
  idsToPicture: string[]; 

  ngOnInit(): void {

    this.tvgridService.getAllMobile().subscribe(data =>{
      this.grids = data as TvGrid[];
    })
  }

  changeSelected(id: number){
    this.selected = id;
  }

  changeTvGrid(tvGrid: string){
    this.tvService.changeGrid(tvGrid);
  }
}
