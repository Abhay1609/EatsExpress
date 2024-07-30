import { Routes } from '@angular/router';
import { HomeComponent } from './component/home_comp/home/home.component';
import { OrderComponent } from './component/order/order.component';
import { CompanyComponent } from './component/company/company.component';
import { FaqComponent } from './component/faq/faq.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'order',
        component:OrderComponent,
    },
    {
        path:'company',
        component:CompanyComponent,
    },
    {
        path:'faq',
        component:FaqComponent,
    },
    {
        path:'item/:title/:category',
        component:ItemDetailComponent,
    }

];

