import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyProjectComponent } from '../../my-project/my-project.component';
import { CurrentprojectComponent } from '../../my-project/currentproject/currentproject.component';
import { UpcomingprojectComponent } from '../../my-project/upcomingproject/upcomingproject.component';
import { TimesheetComponent } from '../../timesheet/timesheet.component';

@Component({
  selector: 'app-employdetail',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,MatTabsModule, MyProjectComponent,CurrentprojectComponent,TimesheetComponent],
  templateUrl: './employdetail.component.html',
  styleUrl: './employdetail.component.css'
})
export class EmploydetailComponent {
  public employ = {
    name: 'Udhaya Kumar',
    email: 'udhaya@bilint.com',
    join: '2023-00-00',
    designation: 'Employee',
    department: 'Web Design',
    id: 'U 123456',
    location: 'Singapore',
    report: 'Tushar B',
    position: 'UX Designer',
    last:'2023-00-00',
    rate:'$1,000',
    status:'Active',
  }

};
