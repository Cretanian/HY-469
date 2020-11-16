import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants-settings',
  templateUrl: './participants-settings.component.html',
  styleUrls: ['./participants-settings.component.css']
})
export class ParticipantsSettingsComponent implements OnInit {

  part_array:part[] = [
    {
      "name" : "stelios stam"
    },
    {
      "name" : "stelios stam"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

class part {
  name:string;
  constructor() {
    this.name = '';
  }
}
