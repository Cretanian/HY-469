import { ActivityService } from './../../../global/services/activity/activity.service';
import { Message } from './../conversations/conversations.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  @Input() messages: Message[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getAll().subscribe(data =>
      {
        this.messages = data as Message[];
      });
  }

}
