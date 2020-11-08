import { Component, OnInit } from '@angular/core';

import {contactSection} from "../contactSection";
import {Contact} from "../contact";

@Component({
  selector: 'contact-section-list',
  templateUrl: './contact-section-list.component.html',
  styleUrls: ['./contact-section-list.component.css']
})
export class ContactSectionListComponent implements OnInit {
  sections: contactSection[];
  rawData: Contact[];


  constructor() { }

  ngOnInit(): void {

    this.rawData = [
      {
        name: "Antonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Andreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Bllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "bntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "cndreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "dllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "entonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "endreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Fllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Gntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Endreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "fllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "gntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Hndreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Illos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Kntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Lndreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Mllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Nntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Ondreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
      {
        name: "Pllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png"
      },
    ];
    this.sections = new Array(26);
    for (var i = 0; i<26; i++){
      this.sections[i] = new contactSection();
      this.sections[i].hasEntry = false;
      this.sections[i].contactList = [] as Contact[];
      this.sections[i].letter = String.fromCharCode(97+i).toUpperCase();
    }     
    this.format(this.rawData, this.sections);
    console.log(this.sections);
  }

  format(rawData: Contact[], sections: contactSection[]): void{
    for(var i = 0; i < rawData.length; i++){
      var firstLetter = rawData[i].name.substring(0, 1);
      firstLetter = firstLetter.toLowerCase();
      sections[firstLetter.charCodeAt(0)%97].contactList.push(rawData[i]);
      sections[firstLetter.charCodeAt(0)%97].hasEntry = true;    
    }   
    
  } 

}
