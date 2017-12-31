import { element } from 'protractor';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import Typed from '../../assets/scripts/typed.js/typed';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit {
  public loadAPI: Promise<any>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadTypedJS();
      this.loadCanvas();
      resolve(true);
    });
  }

  public loadTypedJS() {
      var typed = new Typed('.type-header', {
        strings: ["",
          "Loading.^500 .^500 .^500  ",
          "Welcome  ^1000 to ^1000 <strong>AR<strong>",
          "Designer ^1000 / Developer",
          "I'm Andres Reales "],
        startDelay: 25,
        typeSpeed: 50,
        backSpeed: 500,
        backDelay: 1500,
        fadeOut: true,
        fadeOutDelay: 1500,
      });
  }

  public loadCanvas(){
    var canvas = require('../../assets/scripts/canvas/canvas.js');
  }

}
