import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
              <h2>{{"welcome "+parentData}}</h2>
              <h2>{{"passkey "+passKey}}</h2>
              <hr>
              <h2>child to parent interaction</h2>
              <button (click)="onClick()">child to parent</button>
            </div>`,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('dataPass') public parentData:string;
  @Input('password') public passKey : string;
  @Output('out') public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    this.childEvent.emit('initial event');
  }
  onClick():void{
    this.childEvent.emit('hey jay');
  }

}
