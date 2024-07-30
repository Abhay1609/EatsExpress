import { Injectable,signal } from "@angular/core";

@Injectable({providedIn:'root'})
export class SharedService{
    info=signal<string>("description")
    menu=signal<string>('home')
    getinfo(data:string){
        this.info.set(data)
    }
    getmenu(data:string){
        this.menu.set(data)
    }
}