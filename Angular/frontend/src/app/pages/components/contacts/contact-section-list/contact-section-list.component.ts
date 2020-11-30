import { Component, OnInit } from '@angular/core';

import {contactSection} from "../../utils/contactSection";
import {Contact} from "../../utils/contact";

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
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: true,
      },
      {
        name: "Andreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Bllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "bntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "cndreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "dllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "entonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "endreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Fllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Gntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Endreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "fllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "gntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Hndreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Illos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Kntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Lndreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Mllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Nntonis Agapakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
      {
        name: "Ondreas Lenakakis",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: true,
      },
      {
        name: "Pllos enas malakas",
        srcProfile: "../../../../assets/icons/TV Grid 1 Grid.png",
        isFavourite: false,
      },
    ];
    this.sections = new Array(27);
    //Favorites
    this.sections[0] = new contactSection();
    this.sections[0].contactList = [] as Contact[];
    this.sections[0].firstLetter = "Favorites";
    this.sections[0].hasEntry = false;

    for (var i = 1; i<27; i++){
      this.sections[i] = new contactSection();
      this.sections[i].hasEntry = false;
      this.sections[i].contactList = [] as Contact[];
      this.sections[i].firstLetter = String.fromCharCode(97+(i-1)).toUpperCase();
    }     

    this.format(this.rawData, this.sections);
    console.log(this.sections);
  }

  format(rawData: Contact[], sections: contactSection[]): void{
    for(var i = 0; i < rawData.length; i++){
      var firstLetter = rawData[i].name.substring(0, 1);
      
      firstLetter = firstLetter.toLowerCase();
      sections[firstLetter.charCodeAt(0)%97 +1].contactList.push(rawData[i]);
      sections[firstLetter.charCodeAt(0)%97 +1].hasEntry  = true;

      if(rawData[i].isFavourite){
        sections[0].contactList.push(rawData[i]);
        sections[0].hasEntry  = true;
      }
        
    }   
    
  } 

}
