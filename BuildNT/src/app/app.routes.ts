import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAlignmentComponent } from './app-alignment/app-alignment.component';
import { ClientListComponent } from './client-list/client-list.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:AppAlignmentComponent,
        children:[
            {
                path: 'dashboard',
                component:DashboardComponent,
            },
            {
                path: 'clientList',
                component:ClientListComponent,
            },
        ]
    },

];
