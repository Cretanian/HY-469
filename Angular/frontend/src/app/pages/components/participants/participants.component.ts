import { ParticipantsService } from './../../../global/services/participants/participants.service';
import { Component, OnInit } from '@angular/core';
import {participant} from '../utils/participant'


@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: participant[]; 
   ;
  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getAll().subscribe(data =>
      {
          this.participants = data as participant[];
      }
    );

  }

}
