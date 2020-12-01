import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'participants-window',
  templateUrl: './participants-window.component.html',
  styleUrls: ['./participants-window.component.css']
})
export class ParticipantsWindowComponent implements OnInit {
  @Input() navigationButtons: boolean;
  @Input() participantSelected: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
