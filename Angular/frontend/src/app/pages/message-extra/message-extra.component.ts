import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'message-extra',
  templateUrl: './message-extra.component.html',
  styleUrls: ['./message-extra.component.css']
})
export class MessageExtraComponent implements OnInit {
  @Output() closeEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() emojiEmitter: EventEmitter<{emojiSrc: string}> = new EventEmitter<{emojiSrc: string}>();
  @Output() pinEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  pinMenuToggler: boolean = false;

  ngOnInit(): void {
  }

  closeSelf(): void{
    this.closeEmitter.emit();
  }

  emitEmoji(emojiSrc: string): void{
    this.emojiEmitter.emit({emojiSrc: emojiSrc});
  }

  emitPin(comment: string): void{
    this.pinEmitter.emit(comment);
    this.pinMenuToggler = false;
    this.closeSelf();
  }
}
