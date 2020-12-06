import { Component, OnInit, Input, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'participants-window',
  templateUrl: './participants-window.component.html',
  styleUrls: ['./participants-window.component.css']
})
export class ParticipantsWindowComponent implements OnInit {

  @ViewChild('participants', { read: ElementRef, static: false }) public participants: ElementRef<any>;
  @Input() participantSelected: boolean;
  @Input() selectedParticipantName: string;

  display: boolean;
  participantOptions: boolean;

  constructor() { }

  ngOnInit(): void {

    this.display = true;
  }

  public scrollDown(): void {
    this.participants.nativeElement.scrollTop += 106;
  }

  public scrollUp(): void {
    this.participants.nativeElement.scrollTop -= 106;
  }

  participantClicked(name: string){
    if(this.selectedParticipantName == name){
      this.participantSelected = false;
      this.selectedParticipantName = undefined;
    }
    else{
      this.selectedParticipantName = name;
      this.participantSelected = true;
    }
    console.log(name);
  }

}
