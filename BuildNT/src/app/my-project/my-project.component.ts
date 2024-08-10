import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrentprojectComponent } from './currentproject/currentproject.component';
import { UpcomingprojectComponent } from './upcomingproject/upcomingproject.component';


@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTabsModule, CurrentprojectComponent,UpcomingprojectComponent],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.css'
})
export class MyProjectComponent {

}
