import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/global/services/participants/participants.service';

@Component({
  selector: 'app-participants-settings',
  templateUrl: './participants-settings.component.html',
  styleUrls: ['./participants-settings.component.css']
})
export class ParticipantsSettingsComponent implements OnInit {

  part_array:Contact[];
  constructor(private contactsService: ParticipantsService) { }

  ngOnInit(): void {
    this.contactsService.getAll().subscribe(data => {
      this.part_array = data as Contact[];
    });
  }

}

export class Contact{
  name:string;
  src1:string;
  src2: string;
  src3: string;
}
