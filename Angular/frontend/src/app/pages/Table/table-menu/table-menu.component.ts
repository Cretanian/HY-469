import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css']
})
export class TableMenuComponent implements OnInit {

  @Input() enableParticipantSpawn: boolean;
  display:boolean;

  constructor() { 
    this.display = true;
    this.enableParticipantSpawn = true;
  }

  ngOnInit(): void {
    this.enableParticipantSpawn = true;
  }

  spawnParticipantsButton(){
      this.display = false;
      this.enableParticipantSpawn = false;
  }

  receiveDisplayParticipantEvent(participantsIsDisplayed: boolean){
    this.display = true;
    this.enableParticipantSpawn = !this.enableParticipantSpawn;
  }

  spawnMenu(){
    this.display = true;
  }

  despawnMenu(){
    this.display = false;
  }

}