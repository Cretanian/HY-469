import { contactSection } from './../../components/utils/contactSection';
import { ContactsService } from './../../../global/services/contacts/contacts.service';
import { Contact } from './../../components/utils/contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  sections: contactSection[];
  rawData: Contact[];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {

  this.contactsService.getAll("asd").subscribe(data => {
      this.rawData = data as Contact[];
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
  });
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
