import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAlignmentComponent } from './app-alignment/app-alignment.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { EmployComponent } from './employ/employ.component';
import { CreateemployComponent } from './employ/createemploy/createemploy.component';
import { CurrentprojectComponent } from './my-project/currentproject/currentproject.component';
import { UpcomingprojectComponent } from './my-project/upcomingproject/upcomingproject.component';
import { CompleteprojectComponent } from './my-project/completeproject/completeproject.component';
import { CreateprojectComponent } from './my-project/createproject/createproject.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { SmrtComponent } from './smrt1/smrt-details/smrt-details.component';
import { SmrtEditComponent } from './smrt1/smrt-edit/smrt-edit.component';
import { EmploydetailComponent } from './employ/employdetail/employdetail.component';
import { ReportsComponent } from './reports/reports.component';
import { CreatetaskComponent } from './my-project/createproject/createtask/createtask.component';
import { AssignTeamsComponent } from './my-project/createproject/assign-teams/assign-teams.component';
import { EditempolyComponent } from './employ/editempoly/editempoly.component';
import { CreatePageComponent } from './smrt1/create-page/create-page.component';

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
          {
            path: 'completedproject',
            component: CompleteprojectComponent,
          },
          {
            path: 'createproject',
            component: CreateprojectComponent,
          },
        ],
      },
      {
        path:'myproject/createproject',
        component:CreateprojectComponent,
      },
      {
        path:'createtask',
        component:CreatetaskComponent,
      },
      {
        path:'AssignTeams',
        component:AssignTeamsComponent,
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
        path: 'employ/detail',
        component: EmploydetailComponent,
      },
      {
        path: 'employ/detail/editemploy',
        component: EditempolyComponent,
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
        path: 'client-edit',
        component: SmrtEditComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'create-client',
        component: CreatePageComponent,
      },
    ],
  },
];
