import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TimesheetComponent } from '../timesheet/timesheet.component';

@Component({
  selector: 'app-my-timesheet',
  standalone: true,
  imports: [RouterLink,RouterOutlet,TimesheetComponent],
  templateUrl: './my-timesheet.component.html',
  styleUrl: './my-timesheet.component.css'
})
export class MyTimesheetComponent {
  
}
