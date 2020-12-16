import { Component, OnInit, Input } from '@angular/core';
import {ContactsService} from '../../../../global/services/contacts/contacts.service'
import {contactSection} from "../../utils/contactSection";
import {Contact} from "../../utils/contact";


@Component({
  selector: 'contact-section-list',
  templateUrl: './contact-section-list.component.html',
  styleUrls: ['./contact-section-list.component.css']
})
export class ContactSectionListComponent implements OnInit {
  @Input() sections: contactSection[];
  constructor() {}

  ngOnInit(): void {}

}
