import { Component, OnInit, Input, Output } from '@angular/core';
import { MessagesService } from '../../../global/services/messages/messages.service'
import { Location } from '@angular/common';
import { SocketsService } from 'src/app/global/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'explorer-contact-chat',
  templateUrl: './explorer-contact-chat.component.html',
  styleUrls: ['./explorer-contact-chat.component.scss']
})
export class ExplorerContactChatComponent implements OnInit {
  @Input('teamName') contact: string;

  constructor(
      private messagesService: MessagesService,
      private _location: Location,
      private activatedRoute:ActivatedRoute,
      private socketService: SocketsService
    ){
    
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('contact ngoninit')
      this.contact = params['contact'];
      console.log('params: ' + this.contact);
    });
  }

  backClicked() {
    this._location.back();
  }
}
