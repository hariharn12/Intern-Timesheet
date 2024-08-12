import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CreateprojectComponent } from "../createproject/createproject.component";

@Component({
  selector: 'app-upcomingproject',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CreateprojectComponent],
  templateUrl: './upcomingproject.component.html',
  styleUrl: './upcomingproject.component.css'
})
export class UpcomingprojectComponent {

}
