import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mobile-team-more',
  templateUrl: './mobile-team-more.component.html',
  styleUrls: ['./mobile-team-more.component.css']
})
export class MobileTeamMoreComponent {
  @Output("disableMore") disableMore: EventEmitter<any> = new EventEmitter();
  @Input("Team_name") Team_name: string;

  constructor() {

  }
  
  DisableMore() {
    this.disableMore.emit();
  }

  ngOnInit(): void {
  }

}
