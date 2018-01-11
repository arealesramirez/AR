import { Component, EventEmitter, Output, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent {
  public title: string;
  public message: string;
  @HostBinding('class.hidden') isHidden:boolean;

  constructor() {
      this.title = 'title';
      this.message = 'message';
      this.isHidden = true;
  }

  public onClick() {
    this.isHidden = true;
  }
}
