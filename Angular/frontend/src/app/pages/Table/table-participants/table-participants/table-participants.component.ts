import { ParticipantsService } from './../../../../global/services/participants/participants.service';
import { participant } from 'src/app/pages/components/utils/participant';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-participants',
  templateUrl: './table-participants.component.html',
  styleUrls: ['./table-participants.component.css']
})

export class TableParticipantsComponent implements OnInit {
  selectedName: string;
  participants: participant[];
  @Output() participantEvent = new EventEmitter<string>();

  constructor(private participantsService: ParticipantsService) 
  {}

  ngOnInit(): void {
    this.participantsService.getAll().subscribe(data =>{
      this.participants = data as participant[];
    }
    );        
  }

  participantClicked(name: string){
    this.participantEvent.emit(name);
    if(name == this.selectedName)
      this.selectedName = undefined;
    else
      this.selectedName = name;
  }

}
