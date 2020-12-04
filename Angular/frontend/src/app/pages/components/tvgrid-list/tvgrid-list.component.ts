import { TvGridService } from './../../../global/services/tvgrid/tvgrid.service';
import { Component, OnInit } from '@angular/core';
import {TvGrid} from './tvgrid';

@Component({
  selector: 'tvgrid-list',
  templateUrl: './tvgrid-list.component.html',
  styleUrls: ['./tvgrid-list.component.css']
})
export class TvgridListComponent implements OnInit {

  
  grids: TvGrid[];
  selected: number;

  constructor(private tvgridService: TvGridService){}

  ngOnInit(): void {
    this.tvgridService.getAll().subscribe(data =>{
      this.grids = data as TvGrid[];
    })
  }

  changeSelected(id: number){
    this.selected = id;
  }

}
