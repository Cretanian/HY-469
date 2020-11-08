import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() name:string;
  @Input() srcProfile:string;
  

  constructor() { }

  ngOnInit(): void {
    this.srcProfile = "../../../../assets/icons/TV Grid 1 Grid.png";
  }

}
