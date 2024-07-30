import { Injectable,inject,signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DATA,FAQ } from "../order-card/order-modle";
@Injectable({providedIn:'root'})
export class HomeService{
    navbar=signal<boolean>(false);
    itemData=signal<DATA[]>([]);
    category=signal("all");
    faq=signal<FAQ[]>([]);
    categorydata=signal<DATA[]>([]);
    faqselect=signal<string>('');
    burgerData=signal<DATA[]>([])
    faqtoogle=signal<string>('close')
    getitem(){
        const httpClient = inject(HttpClient)
        const subscription=httpClient.post<{data:any[]}>("http://localhost:8000/api/item/get",{},{withCredentials:true}).subscribe({
            next:(res)=>{
                this.itemData.set(res.data)
                // return res.data
            },error:(err)=>{
                console.log(err)
            }
        })


    }
    getfaq(){
        const httpclient=inject(HttpClient)
        httpclient.get<{data:any[]}>("http://localhost:8000/api/item/getfaq").subscribe({
            next:(res)=>{
                this.faq.set(res.data)
            },error:(err)=>{console.log(err)}
            
        })
    }
    showanswer(id:string){
        this.faqtoogle()=='close'?this.faqtoogle.set('open'):this.faqtoogle.set('close')
       this.faqselect()==''?this.faqselect.set(id):this.faqselect.set('')

    }
    getfilter(category:string){
        this.category.set(category)
        const data=this.itemData().filter((item)=>item.inventory.category===category)
        this.burgerData.set(data)
        return data
    }


    getByCategory(category:string){
        return this.itemData().filter((item)=>item.inventory.category===category)
    }
    opennavbar(){
       
       this.navbar()===false?this.navbar.set(true):this.navbar.set(false)
        

    }
    closebar(){
        this.navbar.set(false)
    }
    getproduct(title:string){
        return this.itemData().filter((item)=>item.title==title)
       
    }
}