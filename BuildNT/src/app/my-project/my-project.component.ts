import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrentprojectComponent } from './currentproject/currentproject.component';
import { UpcomingprojectComponent } from './upcomingproject/upcomingproject.component';
import { CompleteprojectComponent } from './completeproject/completeproject.component';
import { CreateprojectComponent } from './createproject/createproject.component';


@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTabsModule, MyProjectComponent,CurrentprojectComponent,UpcomingprojectComponent,CompleteprojectComponent,CreateprojectComponent],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.css'
})
export class MyProjectComponent {

}
