import { Component, inject } from '@angular/core';
import { HomeService } from '../home/home.service';
import { trigger,state,style,animate,transition, animation } from '@angular/animations';
@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
  animations: [
    trigger('slideIn', [
      state('close', style({ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        'opacity':'1',
       })),
      state('open', style({ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
        'opacity': '1',
        'transform-style': 'preserve-3d'
      })),
      transition('close <=> open', [
        animate('0.8s ease-out')
      ])
    ]),
   trigger('image',[
    state('close', style({ 
      'opacity':0,

      'height':'0px'
     })),
    state('open', style({ 
      'opacity': '1',
      'height':'fit-content'
    })),
    transition('close <=> open', [
      animate('0.8s ease-in-out')
    ])

   ])


  ]
})
export class QuestionComponent {
  homeservice=inject(HomeService)
flag='close';
onclick(){
  if(this.flag=='close'){this.flag='open'}
  this.flag='close'
}
}
