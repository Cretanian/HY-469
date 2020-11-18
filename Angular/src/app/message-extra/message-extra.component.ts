import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'message-extra',
  templateUrl: './message-extra.component.html',
  styleUrls: ['./message-extra.component.css']
})
export class MessageExtraComponent implements OnInit {
  @Output() closeEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeSelf(): void{
    this.closeEmitter.emit();
  }
}
