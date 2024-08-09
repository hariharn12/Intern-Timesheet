import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClientListComponent } from './client-list/client-list.component';
import { SmrtComponent } from './smrt/smrt.component';

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, CommonModule, LoginComponent, DashboardComponent,ClientListComponent,SmrtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuildNT';
}
