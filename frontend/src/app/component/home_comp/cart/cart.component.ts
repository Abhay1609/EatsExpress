import { Component, Input, Output, inject } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component'; 
import { trigger,state,style,animate,transition } from '@angular/animations';
import { CartService } from '../cart-item/cart.service'; 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  animations: [
    trigger('slideIn', [
      state('close', style({ 
        'opacity':0,
        
       })),
      state('open', style({ 
        'opacity': '1',
      

       
      })),
      transition('close <=> open', [
        animate('3s ease-in-out')
      ])
    ]),
    trigger('image',[
      state('close', style({ transform: 'translate3d(0px, 0%, 0px)',
        'opacity':0,
        'right': '-100%'
       })),
      state('open', style({ transform: 'translate3d(0px, 0px, 0px)',
        'opacity': '1',
        'right': '0%'
        
      })),
      transition('close <=> open', [
        animate('1s ease-out')

      ])
  
     ])


  ]
})
export class CartComponent {

cartservice=inject(CartService)


}
