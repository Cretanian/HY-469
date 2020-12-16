import { Component, OnInit,Input } from '@angular/core';
import { participant } from '../../components/utils/participant';

@Component({
  selector: 'app-f-participants',
  templateUrl: './f-participants.component.html',
  styleUrls: ['./f-participants.component.css']
})
export class FParticipantsComponent implements OnInit {
  @Input() participants: participant[];
  constructor() { }

  ngOnInit(): void {
  }

}
