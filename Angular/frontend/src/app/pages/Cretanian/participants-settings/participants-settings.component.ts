import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/global/services/participants/participants.service';

@Component({
  selector: 'app-participants-settings',
  templateUrl: './participants-settings.component.html',
  styleUrls: ['./participants-settings.component.css']
})
export class ParticipantsSettingsComponent implements OnInit {

  part_array:Contact[];
  helper: Contact[];
  Team_name:string;
  constructor(private contactsService: ParticipantsService) { }

  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.contactsService.getAll().subscribe(data => {
      this.helper = data as Contact[];
      this.part_array = new Array();
      for(let i = 0; i < this.helper.length; i++)
        {
          if(this.helper[i].team == this.Team_name )
          {
            this.part_array.push(new Contact(this.helper[i].name,this.helper[i].src2));
          }
        }
    });
  }

}

export class Contact{
  name:string;
  src1:string;
  src2: string;
  src3: string;
  team: string;
  constructor(name:string,team:string){
    this.name = name;
    this.team =team;
  }
}
