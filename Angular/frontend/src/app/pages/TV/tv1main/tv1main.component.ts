import { Component, OnInit,Input } from '@angular/core';
import { participant } from '../../components/utils/participant';

@Component({
  selector: 'app-tv1main',
  templateUrl: './tv1main.component.html',
  styleUrls: ['./tv1main.component.css']
})
export class Tv1mainComponent implements OnInit {
  @Input() participants: participant[];
  constructor() {}

  ngOnInit(): void {
  }

}
