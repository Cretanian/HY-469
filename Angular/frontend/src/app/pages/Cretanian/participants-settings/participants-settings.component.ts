import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/global/services/contacts/contacts.service';

@Component({
  selector: 'app-participants-settings',
  templateUrl: './participants-settings.component.html',
  styleUrls: ['./participants-settings.component.css']
})
export class ParticipantsSettingsComponent implements OnInit {

  part_array:Contact[];
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getAll("asd").subscribe(data => {
      this.part_array = data as Contact[];
    });
  }

}

export class Contact{
  name:string;
  srcProfile:string;
  isFavourite: boolean;
}
