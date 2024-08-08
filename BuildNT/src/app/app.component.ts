import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, CommonModule, LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuildNT';
}
