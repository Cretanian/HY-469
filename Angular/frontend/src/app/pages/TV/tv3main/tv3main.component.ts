import { Component, OnInit,Input } from '@angular/core';
import { participant } from '../../components/utils/participant';

@Component({
  selector: 'app-tv3main',
  templateUrl: './tv3main.component.html',
  styleUrls: ['./tv3main.component.css']
})
export class Tv3mainComponent implements OnInit {
  @Input() participants: participant[];

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}