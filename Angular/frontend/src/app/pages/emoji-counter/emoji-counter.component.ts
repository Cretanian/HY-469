import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emoji-counter',
  templateUrl: './emoji-counter.component.html',
  styleUrls: ['./emoji-counter.component.css']
})
export class EmojiCounterComponent implements OnInit {

  @Input('amount') ammount: number;
  @Input('emojiSrc') emojiSrc: string;

  constructor() { 
    if(this.emojiSrc == undefined)
      this.emojiSrc = '../../assets/emojis/hearts_for_eyes_icon.png'
    if(this.ammount == undefined)
      this.ammount = -1;
  }

  ngOnInit(): void {

      console.log('HALO Emojisrc: ' + this.emojiSrc);
      this.emojiSrc = '../../../assets/emojis/' + this.emojiSrc;

  }

}
