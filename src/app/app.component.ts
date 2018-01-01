import {
  Component,
  OnInit,
  OnChanges,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AppState } from './app.service';
import { PostsService } from './posts/posts.service';
import { ContactService } from './contact/contact.service';
import { HeaderComponent } from './header/header.component';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  // styleUrls: [ './app.component.scss'],
  templateUrl: './app.component.html',
  providers: [PostsService, ContactService]
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges {
  public loadAPI: Promise<any>;
  public isMenuActive: boolean;
  public activeComponent: string = 'home';
  public @ViewChild('imgHamburger') imgHamburger: ElementRef;
  public @ViewChild('imgExit') imgExit: ElementRef;

  constructor(
    public appState: AppState
  ) {
    this.isMenuActive = false;
  }

  public ngOnChanges() {
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public ngAfterViewInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadChangeColorHeader();
      resolve(true);
    });
  }

  public onToggle() {
    if (this.isMenuActive === true) {
      this.isMenuActive = false;
      this.imgHamburger.nativeElement.classList.remove('hidden');
      this.imgExit.nativeElement.classList.add('hidden');
    } else {
      this.isMenuActive = true;
      this.imgHamburger.nativeElement.classList.add('hidden');
      this.imgExit.nativeElement.classList.remove('hidden');
    }
  }

  public loadChangeColorHeader() {
    let topHome = $('app-home').offset().top;
    let topAbout = $('app-about').offset().top;
    let topServices = $('app-services').offset().top;
    let topHireme = $('app-hireme').offset().top;
    let topContact = $('app-contact').offset().top;
    let topFooter = $('app-footer').offset().top;
    let currentDiv = 'app-home';
    let rgb = 0;

    $(document).scroll(function () {
      if (window.pageYOffset < topAbout) {
        currentDiv = 'app-home';
      } else if (window.pageYOffset > topAbout && window.pageYOffset < topServices) {
        currentDiv = 'app-about .skewed-section';
      } else if (window.pageYOffset > topServices && window.pageYOffset < topHireme) {
        currentDiv = 'app-services .skewed-section';
      } else if (window.pageYOffset > topHireme && window.pageYOffset < topContact) {
        currentDiv = 'app-hireme .skewed-section';
      } else if (window.pageYOffset > topContact && window.pageYOffset < topFooter) {
        currentDiv = 'app-contact .skewed-section';
      } else if (window.pageYOffset > topFooter) {
        currentDiv = 'app-footer';
      }
      if (currentDiv === 'app-home') {
        rgb = 0;
      } else {
        rgb = $(currentDiv)
          .css('background-color')
          .replace('rgb(', '')
          .replace(')', '')
          .split(',')
          .map(Number);
      }
      let o = Math.round(((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000);

      if (o > 125) {
        $('.menu-hamburger img').css('border-color', '#380404');
      } else {
        $('.menu-hamburger img').css('border-color', '#ffffff');
      }
    });
  }

  public onSlide(componentName: string) {
    this.isMenuActive = false;
    let componentTopOffset = componentName === 'about' ? 100 : 50;
    $('html, body').animate({
      scrollTop: $('app-' + componentName).offset().top + componentTopOffset
    }, 2000);
  }
}