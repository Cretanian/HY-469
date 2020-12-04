import { TvGrid } from './../tvgrid-list/tvgrid';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tvgrid',
  templateUrl: './tvgrid.component.html',
  styleUrls: ['./tvgrid.component.css']
})
export class TVGridComponent implements OnInit {

  @Input() grid: TvGrid;
  @Input() selected: number;
  @Output() selectEvent = new EventEmitter<number>();

  constructor() { 

  }

  ngOnInit(): void {

  }

  select(){
    console.log("CHILD " + this.selected);
    this.selectEvent.emit(this.grid.id);
  }

}
