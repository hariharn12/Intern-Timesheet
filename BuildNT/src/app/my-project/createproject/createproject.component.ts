import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core'; 
import { CommonModule } from '@angular/common';
import { CreatetaskComponent } from "./createtask/createtask.component";
import { CurrentprojectComponent } from '../currentproject/currentproject.component';
import { CompleteprojectComponent } from '../completeproject/completeproject.component';
import { UpcomingprojectComponent } from '../upcomingproject/upcomingproject.component';
import { AssignTeamsComponent } from './assign-teams/assign-teams.component';

@Component({
  selector: 'app-createproject',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatTabsModule, MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule, CommonModule, CreatetaskComponent,AssignTeamsComponent,CurrentprojectComponent,CompleteprojectComponent,UpcomingprojectComponent],
  templateUrl: './createproject.component.html',
  styleUrl: './createproject.component.css'
})
export class CreateprojectComponent {
  selectedFiles: string | undefined;
  onFileSelected(event: Event): void {
    console.log(event, 'event');

    const input = event.target as HTMLInputElement;
    if (input.files) {
      const fileNames = Array.from(input.files)
        .map((file) => file.name)
        .join(', ');
      this.selectedFiles = fileNames;
    }
  }

}
