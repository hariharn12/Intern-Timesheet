import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list.component';
export const routes: Routes = [
   
    {
        path:'',
        component:ClientListComponent,
        children:[
            {
                path: 'smrt',
                component:ClientListComponent,
            },
        ]
    },

];
