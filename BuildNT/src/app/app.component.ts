import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
<<<<<<< HEAD
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
=======
import { ClientListComponent } from './client-list/client-list.component';
import { SmrtComponent } from './smrt/smrt.component';
>>>>>>> 6c4599daba65b09e425617ab66e647a35302bdfd

@Component( {
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, RouterLink, SidebarComponent, CommonModule, LoginComponent, DashboardComponent, MyTimesheetComponent],
=======
  imports: [RouterOutlet, RouterLink, SidebarComponent, CommonModule, LoginComponent, DashboardComponent,ClientListComponent,SmrtComponent],
>>>>>>> 6c4599daba65b09e425617ab66e647a35302bdfd
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuildNT';
}
