import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-timesheet',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './my-timesheet.component.html',
  styleUrl: './my-timesheet.component.css'
})
export class MyTimesheetComponent {
  
}
