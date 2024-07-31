import { Component,effect,inject } from '@angular/core';
import { OrderCardComponent } from '../home_comp/order-card/order-card.component';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DATA } from '../home_comp/order-card/order-modle';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { HomeService } from '../home_comp/home/home.service';
interface ApiResponse{

  data:any
}
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [OrderCardComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
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
export class OrderComponent {
  homeservice=inject(HomeService)
  previous=false;
  
  constructor(){
    effect(()=>{this.itemList=this.homeservice.itemData().slice(0,8)})
    // effect(()=>{console.log(this.homeservice.itemData())})
    
  }
  getAllData(){
    this.itemList=this.homeservice.itemData().slice(0,8)
    this.homeservice.category.set("all")
    this.previous=false;
  }
  getNextData(){
    this.itemList=this.homeservice.itemData().slice(8,14);
    this.previous=true;
    // window.scrollTo({ top: 100, behavior: 'smooth' });

  }
  itemList:DATA[]=this.homeservice.itemData()
  getCategoryData(category:string){
    this.itemList=this.homeservice.getfilter(category)
    
  }

 
 
}
