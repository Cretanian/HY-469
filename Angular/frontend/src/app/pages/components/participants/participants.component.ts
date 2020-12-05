import { Component, OnInit, Input } from '@angular/core';
import {participant} from '../utils/participant'


@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  @Input() participants: participant[]; 
  
  constructor() { }

  ngOnInit(): void {

  }

}
