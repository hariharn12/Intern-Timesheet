import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjecttaskComponent } from '../../projecttask/projecttask.component';
import { ProjectteamComponent } from '../../projectteam/projectteam.component';

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [RouterLink,RouterOutlet,MatTabsModule,ProjecttaskComponent,ProjectteamComponent],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.css'
})
export class ProjectdetailComponent {

}
