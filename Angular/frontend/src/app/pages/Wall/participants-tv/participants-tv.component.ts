import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/global/services/participants/participants.service';

@Component({
  selector: 'participants-tv',
  templateUrl: './participants-tv.component.html',
  styleUrls: ['./participants-tv.component.css']
})
export class ParticipantsTVComponent implements OnInit {

  participantsTV: Contact[];

  constructor(private contactsService: ParticipantsService) { }

  ngOnInit(): void {
    this.contactsService.getAll().subscribe(data => {
      this.participantsTV = data as Contact[];
    });
  }

}

export class Contact{
  name:string;
  src1:string;
  src2: string;
  src3: string;
}
