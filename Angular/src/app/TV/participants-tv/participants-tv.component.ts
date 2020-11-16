import { Component, OnInit } from '@angular/core';
import {participantTV} from './participant-tv'

@Component({
  selector: 'participants-tv',
  templateUrl: './participants-tv.component.html',
  styleUrls: ['./participants-tv.component.css']
})
export class ParticipantsTVComponent implements OnInit {

  participantsTV: participantTV[];

  constructor() { }

  ngOnInit(): void {
    this.participantsTV = [
      {
        name: "Stylianos Stamatakis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Zacharias Pervolarakis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Antonis Agapakis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Manolis Agapakis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Yannis Stamatakis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Manos Pervolarakis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Antonios Savvidis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Asterios Leonidis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Constantine Stefanidis",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
      {
        name: "Another Dude",
        srcProfile: "../../assets/icons/TV Grid 1 Grid.png",
        srcCamera: "../../assets/icons/theatre-mic.svg",
        srcMic: "../../assets/icons/theatre-mic.svg",
      },
    ]
  }

}
