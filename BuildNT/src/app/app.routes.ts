import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAlignmentComponent } from './app-alignment/app-alignment.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { EmployComponent } from './employ/employ.component';
import { CreateemployComponent } from './createemploy/createemploy.component';
import { SmrtComponent } from './smrt/smrt.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:AppAlignmentComponent,
        children:[
            { path: '',   redirectTo: '/login', pathMatch: 'full' },
            {
                path: 'dashboard',
                component:DashboardComponent,
            },
            {
                path: 'clientList',
                component:ClientListComponent,
            },
            {
                path: 'myproject',
                component:MyProjectComponent,
            },
            {
                path: 'employ',
                component: EmployComponent,
            },
            {
                path:'employ/createemploy',
                component:CreateemployComponent,
            },
            {
                path: 'clientList/smrt',
                component:SmrtComponent,
            },
        ]
    },
    
    
];
