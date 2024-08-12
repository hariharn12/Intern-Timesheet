import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


interface employees {
  id: string;
  firstName: string;
  email: string;
  path:string;
  lastName:string;
  depatment:string;
  report:string;
  joining:string;
}

@Component({
  selector: 'app-employ',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './employ.component.html',
  styleUrl: './employ.component.css'
})
export class EmployComponent {
  employee: employees[] = [
    {
      id: 'U 123456',
      firstName: 'Nathan',
      lastName:'Robert',
      email: 'udhaya@blint.co',
      depatment: 'UI/UX',
      path: 'detail',
      report:'Tushar B',
      joining:'12/07/2023'
    },
    {
      id: 'U 123456',
      firstName: 'Nathan',
      lastName:'Robert',
      email: 'udhaya@blint.co',
      depatment: 'UI/UX',
      path: 'detail',
      report:'Tushar B',
      joining:'12/07/2023'
    },
    {
      id: 'U 123456',
      firstName: 'Nathan',
      lastName:'Robert',
      email: 'udhaya@blint.co',
      depatment: 'UI/UX',
      path: 'detail',
      report:'Tushar B',
      joining:'12/07/2023'
    },
  ];

}
