import { Component, OnInit } from '@angular/core';
import {participant} from '../utils/participant'

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: participant[]; 

  constructor() { }

  ngOnInit(): void {
    this.participants = [
      {
        name: "Zacharias Pervolarakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png"
      },
      {
        name: "Stylianos Stamatakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png"
      },
      {
        name: "Antonis Agapakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png"
      },
      {
        name: "Magkoyths Kwnstantinos",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png"
      },
      {
        name: "Youla Faturu",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png"
      },
      {
        name: "Savvidis Antonis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png"
      },
      {
        name: "Leonidis Asterios",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png"
      },
      
    ]

  }

}
