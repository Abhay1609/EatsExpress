import { Component, OnChanges, OnInit, inject, input,signal,effect } from '@angular/core';
import { OrderCardComponent } from "../home_comp/order-card/order-card.component";
import { HomeService } from '../home_comp/home/home.service';
import { DATA } from '../home_comp/order-card/order-modle';
import { CartService } from '../home_comp/cart-item/cart.service';

import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [OrderCardComponent],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
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
export class ItemDetailComponent   {
 pid=input<string>("Drink Lime");
 homeservice=inject(HomeService)
 cartservice=inject(CartService)

 route=inject(ActivatedRoute)
 title?:any
 category?:any
 constructor(){
  this.route.paramMap.subscribe(params=>{
    this.title=params.get('title');
    this.category=params.get('category');
  });

  
 }

  sharedservice=inject(SharedService)
  

 quantity=1


}
