import { Component, OnInit, inject ,OnDestroy, signal,effect } from '@angular/core';
import { OrderCardComponent } from "../order-card/order-card.component";
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DATA } from '../order-card/order-modle';
import { HomeService } from '../home/home.service';
interface ApiResponse{

  data:any
}
@Component({
  selector: 'app-available-menu',
  standalone: true,
  imports: [OrderCardComponent],
  templateUrl: './available-menu.component.html',
  styleUrl: './available-menu.component.css'
})
export class AvailableMenuComponent {

  homeservice=inject(HomeService)

  itemList!:DATA[]

  getCategoryData(category:string){
    this.itemList=this.homeservice.getfilter(category)
    console.log(this.itemList)
    
  }
 



}
