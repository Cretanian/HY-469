import { Component, OnInit, Input } from '@angular/core';
import {Contact} from "../../utils/contact";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})


export class ContactListComponent implements OnInit {
  //list contains contacts that begin with the same letter
  @Input() sameLetterList: Contact[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
