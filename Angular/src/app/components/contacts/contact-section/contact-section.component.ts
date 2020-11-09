import { Component, Input, OnInit } from '@angular/core';
import {Contact} from "../../utils/contact"

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {
  @Input() sameLetterList: Contact[];
  @Input() firstLetter: string;
  constructor() { }

  ngOnInit(): void {
  
  }

}
