import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTabsModule],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.css'
})
export class MyProjectComponent {

}
