import { Message } from './../activity-message/activity-message';
import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  @Input() messageList: Message[];

  constructor() { }

  ngOnInit(): void {
    this.messageList = [      
        {
          firstLine: "added you", 
          src: "../../../../assets/activitiesIcons/added to team.png",
          hasSecondaryText: false,
          secondLine: "to Team Zoume",
          personName: "Young Guy",
          date: "Mon",
          srcProfile: "../../../../assets/profilePics/young guy.png",
        },
        {
          firstLine: "replied", 
          src: "../../../../assets/activitiesIcons/reply.png",
          hasSecondaryText: true,
          secondLine: "HY486 Principles of Distributed ... > Group 3",
          personName: "Old Lady +3",
          date: "01/13",
          srcProfile: "../../../../assets/profilePics/old lady.png",
        },
        {
          firstLine: "added a file", 
          src: "../../../../assets/activitiesIcons/file.png",
          hasSecondaryText: true,
          secondLine: "HY486 Principles of Distributed ... > Group 3",
          personName: "Giorno",
          date: "11/12",
          srcProfile: "../../../../assets/profilePics/I HAVE A DREAM.png",
        },   
    ]
  }

}
