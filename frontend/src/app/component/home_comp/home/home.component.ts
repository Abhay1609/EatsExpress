import { Component, inject ,effect} from '@angular/core';
import { MainComponent } from '../main/main.component';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { WorkingComponent } from "../working/working.component";
import { AvailableMenuComponent } from "../available-menu/available-menu.component";
import { OfflineServiceComponent } from '../offline-service/offline-service.component';
import { CartService } from '../cart-item/cart.service'; 
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutusComponent, WorkingComponent, AvailableMenuComponent,OfflineServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cartservice=inject(CartService)
  homeservice=inject(HomeService)
  constructor(){
  this.cartservice.getCartItem()
  this.homeservice.getitem()

  console.log(this.homeservice.itemData())
  effect(()=>{this.homeservice.getfilter('Burger')}, { allowSignalWrites: true })

}

}
