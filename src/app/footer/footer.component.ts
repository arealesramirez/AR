import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  year =  new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
