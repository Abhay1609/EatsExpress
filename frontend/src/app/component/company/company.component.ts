import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translate3d(0%, 30%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
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
    state('void', style({ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
      'opacity':0,
     })),
    state('*', style({ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
      'opacity': '1',
      'transform-style': 'preserve-3d'
    })),
    transition('void => *', [
      animate('2s ease-in-out')
    ])

   ])


  ]
})
export class CompanyComponent {

}
