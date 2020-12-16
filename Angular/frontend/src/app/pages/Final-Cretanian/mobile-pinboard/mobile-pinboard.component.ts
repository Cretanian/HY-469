import { Component, OnInit } from '@angular/core';
import { PinboardService } from 'src/app/global/services/wall/pinboard.service';
import { Pin } from '../../Wall/pinned/Pin';
import { Message } from '../conversations/conversations.component';
import {Location} from '@angular/common';

@Component({
  selector: 'ami-fullstack-mobile-pinboard',
  templateUrl: './mobile-pinboard.component.html',
  styleUrls: ['./mobile-pinboard.component.scss']
})
export class MobilePinboardComponent implements OnInit {

  pins: Pin[];
  constructor(
    private pinboardService: PinboardService,
    private _location: Location  
  ) { }
  
  ngOnInit(): void {
    this.pinboardService.getAll().subscribe(
      (rawData) => {
        this.pins = [];
        let data: Pin[] = rawData as Pin[];
        data.forEach((element: Pin) => {
          console.log('user: ' + element.user);
          
          //Fix path if image.
          if(element.type == 'image')
            element.value = '../../../../assets/wall/' + element.value;

          this.pins.push(element);
        })
      }
    );
  }

  backClicked() {
    this._location.back();
  }
}
