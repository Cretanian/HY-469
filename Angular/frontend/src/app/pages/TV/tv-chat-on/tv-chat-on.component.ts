import { Component, OnInit,Input } from '@angular/core';
import { participant } from '../../components/utils/participant';

@Component({
  selector: 'app-tv-chat-on',
  templateUrl: './tv-chat-on.component.html',
  styleUrls: ['./tv-chat-on.component.css']
})
export class TvChatOnComponent implements OnInit {
  @Input() participants: participant[];

  constructor() { 
  }

  ngOnInit(): void {
  }

}