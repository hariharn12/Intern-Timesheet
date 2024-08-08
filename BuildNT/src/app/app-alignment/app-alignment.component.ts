import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-alignment',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent,RouterLink,RouterOutlet],
  templateUrl: './app-alignment.component.html',
  styleUrl: './app-alignment.component.css'
})
export class AppAlignmentComponent {

}
