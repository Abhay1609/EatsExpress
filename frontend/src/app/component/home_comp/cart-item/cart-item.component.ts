import { Component, Input, inject,effect } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  cartservice=inject(CartService)

  onRemove(event:Event,id:string){
  const inputElement = event.target as HTMLInputElement;
  const newValue = inputElement.value;
  this.cartservice.updateCartItem(id,newValue)

}
}
