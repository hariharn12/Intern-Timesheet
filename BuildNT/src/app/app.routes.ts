import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAlignmentComponent } from './app-alignment/app-alignment.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { EmployComponent } from './employ/employ.component';
import { CreateemployComponent } from './createemploy/createemploy.component';
import { CurrentprojectComponent } from './my-project/currentproject/currentproject.component';
import { UpcomingprojectComponent } from './my-project/upcomingproject/upcomingproject.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { SmrtComponent } from './smrt1/smrt-details/smrt-details.component';
import { SmrtEditComponent } from './smrt1/smrt-edit/smrt-edit.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AppAlignmentComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'clientList',
        component: ClientListComponent,
      },
      {
        path: 'myproject',
        component: MyProjectComponent,
        children: [
          {
            path: 'currentproject',
            component: CurrentprojectComponent,
          },
          {
            path: 'upcomingproject',
            component: UpcomingprojectComponent,
          },
        ],
      },
      {
        path: 'employ',
        component: EmployComponent,
      },
      {
        path: 'employ',
        component: EmployComponent,
      },
      {
        path: 'employ/createemploy',
        component: CreateemployComponent,
      },

      {
        path: 'clientList/smrt-details',
        component: SmrtComponent,
      },
      {
        path: 'mytimesheet',
        component: MyTimesheetComponent,
      },
      {
        path: 'smrt-edit',
        component: SmrtEditComponent,
      },
      {
        path:'reports',
        component: ReportsComponent
      },
    ],
  },
];
