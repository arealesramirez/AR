import {
  Component,
  OnInit,
  OnChanges,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  HostListener,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import THREE from '../../assets/scripts/three';

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
export class HeaderComponent implements OnInit, OnChanges {
  public menuState = 'active';
  public hamburgerState = 'inactive';
  public isHamburgerHidden = false;
  @ViewChild('menuHamburger') menuHamburger: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('menuContainer') menuContainer: ElementRef;
  // public @Input() menuToggle: boolean = false;
  @Input()
  set menuToggle(active: boolean) {
    this._menuToggle = active;
  };
  @Output() menuOptionClicked: EventEmitter<string> = new EventEmitter<string>();
  public _menuToggle: boolean;

  constructor() { }

  public ngOnInit() {
    this.menuContainer.nativeElement.classList.remove('menu-active');
    this.menu.nativeElement.classList.add('hidden');
    // let renderer = new THREE.WebGLRenderer({
    //    canvas: document.getElementById('logo-canvas'),
    //    antialias: true ,
    //   });

    // // renderer.setClearColor(0x00ff00);
    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(400, 200);

    // let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

    // let scene = new THREE.Scene();

    // let light = new THREE.AmbientLight(0xffffff, 0.5);
    // scene.add(light);
    // let light1 = new THREE.PointLight(0xffffff, 0.5);
    // scene.add(light1);

    // let geometry = new THREE.CylinderGeometry(200, 200, 10, 50, 50, false);
    // let material = new THREE.MeshLambertMaterial(0xF3FFE2);
    // let textureLoader = new THREE.TextureLoader();
    // textureLoader.load('./assets/icon/100x100.png');
    // let mesh = new THREE.Mesh(geometry, material);
    // mesh.position.set(0, 0, -1000);

    // scene.add(mesh);
    // requestAnimationFrame(render);

    // function render() {
    //   mesh.rotation.x += 0.01;
    //   mesh.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    //   requestAnimationFrame(render);
    // }

  }

  public ngOnChanges(changes: SimpleChanges) {
    if (this._menuToggle !== true) {
      this.menuContainer.nativeElement.classList.remove('menu-active');
      this.menu.nativeElement.classList.add('hidden');
    } else {
      this.menuContainer.nativeElement.classList.add('menu-active');
      this.menu.nativeElement.classList.remove('hidden');
    }
  }

  public onOptionClick(option: string) {
    this.menuContainer.nativeElement.classList.remove('menu-active');
    this.menu.nativeElement.classList.add('hidden');
    this.menuOptionClicked.emit(option);
  }

}
