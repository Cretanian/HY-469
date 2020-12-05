import { ParticipantsService } from './../../../../global/services/participants/participants.service';
import { participant } from 'src/app/pages/components/utils/participant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-participants',
  templateUrl: './table-participants.component.html',
  styleUrls: ['./table-participants.component.css']
})

export class TableParticipantsComponent implements OnInit {
  participants: participant[];

  constructor(private participantsService: ParticipantsService) 
  {}


  ngOnInit(): void {
    this.participantsService.getAll().subscribe(data =>{
      this.participants = data as participant[];
    }
    );        
  }

}
