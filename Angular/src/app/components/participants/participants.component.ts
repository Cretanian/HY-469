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
        src1: "../../../assets/icons/rec (3).svg",
        src2: "../../../assets/icons/rec (3).svg",
        src3: "../../../assets/icons/rec (3).svg"
      },
      {
        name: "Stylianos Stamatakis",
        src1: "../../../assets/icons/rec (3).svg",
        src2: "../../../assets/icons/rec (3).svg",
        src3: "../../../assets/icons/rec (3).svg"
      },
      {
        name: "Antonis Agapakis",
        src1: "../../../assets/icons/rec (3).svg",
        src2: "../../../assets/icons/rec (3).svg",
        src3: "../../../assets/icons/rec (3).svg"
      },
      {
        name: "Magkoytara",
        src1: "../../../assets/icons/rec (3).svg",
        src2: "../../../assets/icons/rec (3).svg",
        src3: "../../../assets/icons/rec (3).svg"
      },
      {
        name: "Youla Faturu",
        src1: "../../../assets/icons/rec (3).svg",
        src2: "../../../assets/icons/rec (3).svg",
        src3: "../../../assets/icons/rec (3).svg"
      },
      {
        name: "Savvidaros o magkas",
        src1: "../../../assets/icons/rec (3).svg",
        src2: "../../../assets/icons/rec (3).svg",
        src3: "../../../assets/icons/rec (3).svg"
      },
      {
        name: "Asteriakos",
        src1: "../../../assets/icons/rec (3).svg",
        src2: "../../../assets/icons/rec (3).svg",
        src3: "../../../assets/icons/rec (3).svg"
      },
      
    ]

  }

}
