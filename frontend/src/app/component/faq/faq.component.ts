import { Component, inject } from '@angular/core';
import { QuestionComponent } from '../home_comp/question/question.component';
import { HomeService } from '../home_comp/home/home.service';
import { SharedService } from '../shared.service';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
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
export class FaqComponent {
  homeservice=inject(HomeService)
  shareservce=inject(SharedService)
  consturctor(){
    this.homeservice.getfaq()
    console.log(this.homeservice.faq())
  }

}
