import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-smrt',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './smrt.component.html',
  styleUrl: './smrt.component.css'
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
