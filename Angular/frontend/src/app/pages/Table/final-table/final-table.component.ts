import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'final-table',
  templateUrl: './final-table.component.html',
  styleUrls: ['./final-table.component.scss']
})
export class FinalTableComponent implements OnInit {

  @Input() enableParticipantSpawn: boolean;
  eventCalled: boolean;
  constructor() { 
    this.enableParticipantSpawn = true;
  }

  ngOnInit(): void {
    this.enableParticipantSpawn = true;
    this.eventCalled = false;
  }

  spawnParticipants(){
    if(!this.eventCalled)
      this.enableParticipantSpawn = false;
    else
      this.eventCalled = !this.eventCalled;
  }

  a(){
    return !this.enableParticipantSpawn;
  }

  receiveDisplayParticipantEvent(participantsIsDisplayed: boolean){
    this.enableParticipantSpawn = !this.enableParticipantSpawn;
    this.eventCalled = true;
  }

}
