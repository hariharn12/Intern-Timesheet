import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrentprojectComponent } from '../../my-project/currentproject/currentproject.component';
import { CompleteprojectComponent } from "../../my-project/completeproject/completeproject.component";

@Component({
  selector: 'app-smrt',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, MatTabsModule, CurrentprojectComponent, CompleteprojectComponent],
  templateUrl: './smrt-details.component.html',
  styleUrl: './smrt-details.component.css'
})
export class SmrtComponent {
  public client = {
    name: 'SMRT',
    email: 'Support@smrt.com',
    onboardingDate: new Date('2023-01-01'),
    contactPerson: 'Vino',
    phoneNumber: '93835 23466',
    id: 'C0001',
    location: 'Chennai',
    accountManager: 'Tushar B',
    address: '72H Poorur, Chennai, 600028'
  };
}
