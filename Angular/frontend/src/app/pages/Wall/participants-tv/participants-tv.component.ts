import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/global/services/contacts/contacts.service';

@Component({
  selector: 'participants-tv',
  templateUrl: './participants-tv.component.html',
  styleUrls: ['./participants-tv.component.css']
})
export class ParticipantsTVComponent implements OnInit {

  participantsTV: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getAll("asd").subscribe(data => {
      this.participantsTV = data as Contact[];
    });
  }

}

export class Contact{
  name:string;
  srcProfile:string;
  isFavourite: boolean;
}
