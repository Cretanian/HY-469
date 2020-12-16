import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mobile-add-pin',
  templateUrl: './mobile-add-pin.component.html',
  styleUrls: ['./mobile-add-pin.component.scss']
})
export class MobileAddPinComponent implements OnInit {

  @ViewChild('input', {static: false}) form: ElementRef;

  @Output('cancelEmitter') cancelEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output('pinEmitter') pinEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

  }

  emitCancel(){
    this.cancelEmitter.emit();
  }

  emitPin(){
    let form = this.form.nativeElement;
    let input: string = form.value;
    this.pinEmitter.emit(input);
    setTimeout( () => {
      form.value = '';
    }, 100)
  }

}
