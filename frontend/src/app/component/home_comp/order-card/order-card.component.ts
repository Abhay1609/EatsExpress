import { Component ,Input, inject} from '@angular/core';
import { DATA } from './order-modle';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart-item/cart.service';
import { HomeService } from '../home/home.service'; 
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent {
  cartservice=inject(CartService)
  homeservices=inject(HomeService)
  router=inject(Router)
  @Input() itemsList?:DATA[];
  quantity=1
  navigateitems(title:string){
    this.router.navigate(['/item',title])
  }
  // httpClient=inject(HttpClient)
  // addCart(id:string,inputvalue:any){
  //   const subscription=this.httpClient.post("http://localhost:8000/api/item/addCart",
  //     {
  //       product_id:id,
  //       quantity:inputvalue
  //     },{withCredentials:true}
  //   ).subscribe({
  //     next:(res)=>{console.log(res)

  //     },
  //     error:(err)=>{
  //       console.log(err)
  //     }
  //   })
    

  // }


}
