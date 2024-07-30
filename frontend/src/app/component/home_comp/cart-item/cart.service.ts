import { Injectable, Signal, inject, signal } from "@angular/core";
import { CART } from "../order-card/order-modle"; 
import { HttpClient } from "@angular/common/http";
interface ApiResponse {
    data:{cart:CART[]}
}


@Injectable({providedIn:'root'})
export class CartService{
    // constructor(){
    //     const data:CART[];

    // }
    // data=signal(this.getCartItem())
    data=signal<CART[]>([])
    toggle=signal<string>('close')
    url='https://eatsexpress-4.onrender.com/api/item/'
    httpClient=inject(HttpClient)
    getCartItem(){
        const subscription=this.httpClient.get<ApiResponse>(this.url+"getCart",{withCredentials:true}).subscribe({
            next:(res)=>{
                this.data.set(res.data.cart)
                //console.log('recevedata',res.data)

                return res.data.cart},
            error:(err)=>{console.log(err)}
        })

    }
    updateCartItem(product_id:string,quantity:string){
        const subscription=this.httpClient.post<ApiResponse>(this.url+"addCart",{
            product_id:product_id,
            quantity:quantity
        },{withCredentials:true}).subscribe({
            next:(res)=>{
                this.data.set(res.data.cart)
                return res.data.cart},
            error:(err)=>{console.log(err)}
        })

    }
    removeCartItem(product_id:string){
        const subscription=this.httpClient.post<ApiResponse>(this.url+'deleteCart',{
            product_id:product_id
        },{withCredentials:true}).subscribe({
            next:(res)=>{
                this.data.set(res.data.cart)
                return res.data.cart}
            ,error:(err)=>{console.log(err)}
        })

    }
    openCartToggle(){
        this.toggle.set('open')
    }
    closeCartToggle(){
        this.toggle.set('close')
    }
    getquantity(){
        return this.data().reduce((accumalator,cv)=>{return accumalator+Number(cv.item.quantity)},0);
    }
    getprice(){
        return this.data().reduce((ac,cv)=>{return ac+(Number(cv.item.product.price.value)*Number(cv.item.quantity))},0);
    }

}