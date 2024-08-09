import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.css'
})
export class MyProjectComponent {

}
