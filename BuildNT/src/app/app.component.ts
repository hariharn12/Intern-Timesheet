import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
<<<<<<< HEAD
=======
import { SidebarComponent } from "./sidebar/sidebar.component";
>>>>>>> a3ce0c0fb854406b3ba61f0f8b9dd122f05c6429
import { LoginComponent } from "./login/login.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component( {
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, RouterLink, LoginComponent, SidebarComponent],
=======
  imports: [RouterOutlet, RouterLink, SidebarComponent, LoginComponent],
>>>>>>> a3ce0c0fb854406b3ba61f0f8b9dd122f05c6429
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BuildNT';
}
