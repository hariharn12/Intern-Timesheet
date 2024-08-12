import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CreateprojectComponent } from "../createproject/createproject.component";


@Component({
  selector: 'app-currentproject',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CreateprojectComponent],
  templateUrl: './currentproject.component.html',
  styleUrl: './currentproject.component.css'
})
export class CurrentprojectComponent {

}
