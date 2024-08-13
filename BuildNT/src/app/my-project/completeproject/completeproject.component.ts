import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrentprojectComponent } from "../currentproject/currentproject.component";
import { CreateprojectComponent } from "../createproject/createproject.component";

@Component({
  selector: 'app-completeproject',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CurrentprojectComponent, CreateprojectComponent],
  templateUrl: './completeproject.component.html',
  styleUrl: './completeproject.component.css'
})
export class CompleteprojectComponent {

}
