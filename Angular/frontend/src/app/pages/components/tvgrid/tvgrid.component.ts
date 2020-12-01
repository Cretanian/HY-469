import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tvgrid',
  templateUrl: './tvgrid.component.html',
  styleUrls: ['./tvgrid.component.css']
})
export class TVGridComponent implements OnInit {

  @Input() title: string;
  @Input() src: string;



  constructor() { 

  }

  ngOnInit(): void {
    
  }

}
