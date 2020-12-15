import { Component, OnInit,Input } from '@angular/core';
import { participant } from '../../components/utils/participant';

@Component({
  selector: 'app-screenshare1main',
  templateUrl: './screenshare1main.component.html',
  styleUrls: ['./screenshare1main.component.css']
})
export class Screenshare1mainComponent implements OnInit {
  @Input()participants: participant[];
  constructor() {}

  ngOnInit(): void {
  }

}
