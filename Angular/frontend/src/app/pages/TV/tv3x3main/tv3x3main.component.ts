import { Component, OnInit,Input } from '@angular/core';
import { participant } from "src/app/pages/components/utils/participant";

@Component({
  selector: 'app-tv3x3main',
  templateUrl: './tv3x3main.component.html',
  styleUrls: ['./tv3x3main.component.css']
})
export class Tv3x3mainComponent implements OnInit {
  @Input() participants: participant[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
