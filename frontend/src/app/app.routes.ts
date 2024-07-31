import { Routes } from '@angular/router';
import { HomeComponent } from './component/home_comp/home/home.component';
import { OrderComponent } from './component/order/order.component';
import { CompanyComponent } from './component/company/company.component';
import { FaqComponent } from './component/faq/faq.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';

export const routes: Routes = [
    {
        path:'home',
        'title':"Home",
        component:HomeComponent,
    },
    {
        path:'order',
        'title':"order",
        component:OrderComponent,
    },
    {
        path:'company',
        'title':"company",
        component:CompanyComponent,
    },
    {
        path:'faq',
        'title':"faq",
        component:FaqComponent,
    },
    {
        path:'item/:title/:category',
        'title':"item",
        component:ItemDetailComponent,
    },{
        'path':'',
        redirectTo:'/home',
        pathMatch:'full'
    }

];

