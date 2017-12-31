import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  HostListener,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('menu', [
      state('active', style({
        'display': 'none'
      })),
      state('inactive', style({
        'display': 'block',
      })),
      transition('active <=> inactive', animate(300)),
    ]),
    trigger('menuHamburger', [
      state('active', style({
        'display': 'none'
      })),
      state('inactive', style({
        'display': 'block',
      })),
      transition('active <=> inactive', animate(300)),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  menuState = 'active';
  hamburgerState = 'inactive';
  isHamburgerHidden = false;
  @ViewChild('menuHamburger') menuHamburger: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('menuContainer') menuContainer: ElementRef;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {

  //   // if (window.innerWidth < 750 && this.isHamburgerHidden) {
  //   //   this.isHamburgerHidden = false;
  //   //   this.menuHamburger.nativeElement.classList.remove('hidden');
  //   //   this.menu.nativeElement.classList.add('hidden');
  //   // } else if (window.innerWidth > 750) {
  //   //   this.menuHamburger.nativeElement.classList.add('hidden');
  //   //   this.menu.nativeElement.classList.remove('hidden');
  //   //   this.isHamburgerHidden = true;
  //   // }
  // }

  constructor() { }

  ngOnInit() {
    // if (window.innerWidth < 750) {
    //   this.isHamburgerHidden = false;
    //   this.menuHamburger.nativeElement.classList.remove('hidden');
    //   this.menu.nativeElement.classList.add('hidden');
    // } else {
    //   this.menuHamburger.nativeElement.classList.add('hidden');
    //   this.menu.nativeElement.classList.remove('hidden');
    //   this.isHamburgerHidden = true;
    // }
  }

  onToggle() {
    this.menuContainer.nativeElement.classList.contains('menu-active') ?
      this.menuContainer.nativeElement.classList.remove('menu-active') :
      this.menuContainer.nativeElement.classList.add('menu-active');
    this.menuContainer.nativeElement.classList.contains('menu-active') ?
      this.menu.nativeElement.classList.remove('hidden') :
      this.menu.nativeElement.classList.add('hidden');
  }
}
