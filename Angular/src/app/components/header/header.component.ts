import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name: string;
  @Input() src1: string;
  @Input() src2: string;
  @Input() src3: string;

  constructor() { }


  ngOnInit(): void {
  }

}
