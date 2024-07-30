import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component'; 
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent } from './component/home_comp/home/home.component'; 
import { CartComponent } from './component/home_comp/cart/cart.component'; 
import { OrderComponent } from './component/order/order.component';
import { CompanyComponent } from './component/company/company.component';
import { CartService } from './component/home_comp/cart-item/cart.service';
import { HomeService } from './component/home_comp/home/home.service';
import { FaqComponent } from "./component/faq/faq.component";
import { ItemDetailComponent } from "./component/item-detail/item-detail.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, CartComponent, OrderComponent, CompanyComponent, FaqComponent, ItemDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food';
  homeservice=inject(HomeService);
  cartservice=inject(CartService)
  constructor(homeservice:HomeService){
    this.homeservice.getitem()
    this.homeservice.getfaq()
    this.cartservice.getCartItem()
    
    console.log(this.homeservice.itemData())
    
  }

}
