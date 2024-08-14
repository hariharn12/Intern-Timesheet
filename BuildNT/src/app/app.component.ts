import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyProjectComponent } from './my-project/my-project.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { ClientListComponent } from './client-list/client-list.component';
import { SmrtComponent } from './smrt1/smrt-details/smrt-details.component';
import { SmrtEditComponent } from './smrt1/smrt-edit/smrt-edit.component';
import { PopupComponent } from './popup/popup.component';

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, CommonModule, LoginComponent, DashboardComponent,ClientListComponent,SmrtComponent,MyProjectComponent,MyTimesheetComponent, SmrtEditComponent,PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuildNT';
}
