import { Component } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { trigger,state,style,animate,transition, animation } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translate3d(-10%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        'opacity':0,
       })),
      state('*', style({ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        'opacity': '1',
        'transform-style': 'preserve-3d'
      })),
      transition('void => *', [
        animate('1s ease-in-out')
      ])
    ]),
   trigger('image',[
    state('void', style({ transform: 'translate3d(5%, 0px, 0px) scale3d(0.9, 0.9, 0.9) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
      'opacity':0,
     })),
    state('*', style({ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
      'opacity': '1',
      'transform-style': 'preserve-3d'
    })),
    transition('void => *', [
      animate('1s ease-in-out')
    ])

   ])


  ]
})
export class MainComponent {
  state='normal';

}
