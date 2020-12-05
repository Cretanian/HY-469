import { Component, OnInit, Input, Output } from '@angular/core';
import { MessagesService } from '../../../global/services/messages/messages.service'
import { Location } from '@angular/common';
import { SocketsService } from 'src/app/global/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ami-fullstack-explorer-team-conversation',
  templateUrl: './explorer-team-conversation.component.html',
  styleUrls: ['./explorer-team-conversation.component.scss']
})
export class ExplorerTeamConversationComponent implements OnInit {
  @Input('teamName') teamName: string;
  @Input('conversationID') conversationID: number;

  constructor(
      private messagesService: MessagesService,
      private _location: Location,
      private activatedRoute:ActivatedRoute,
      private socketService: SocketsService
    ){

    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.teamName = params['team_name'];
      this.conversationID = params['conversationID'];
    });
  }

  backClicked() {
    this._location.back();
  }
}
