import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
