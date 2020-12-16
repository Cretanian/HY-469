import { ActivityService } from './../../../../global/services/activity/activity.service';
import { Message } from './../activity-message/activity-message';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  @Input() messageList: Message[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {

  }

}
