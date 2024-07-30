import { Component, inject } from '@angular/core';
import { CartComponent } from '../home_comp/cart/cart.component'; 
import { CartService } from '../home_comp/cart-item/cart.service'; 
import { HomeService } from '../home_comp/home/home.service'; 
import { RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('slideIn', [
      state('close', style({ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        'opacity':'0rem',
        'height':'0px',
        'top':'-500%',
       })),
      state('open', style({ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        'opacity': '1',
        'top':'100%',
        'height':'30rem',
        'z-indez':'10',
      })),
      transition('close <=> open', [
        animate('1s ease-out')
      ])
    ]),



  ]
})
export class HeaderComponent {
  state="close"
  updatestate(){
    this.state=this.state=='close'?'open':'close'
  }
  
  cartservice=inject(CartService)
  homeservice=inject(HomeService)
  sharedservice=inject(SharedService)
  url=window.location.href
  data=this.url.split('/').reverse()
 









}
