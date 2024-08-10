import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Client {
  id: string;
  clientName: string;
  email: string;
  project: string;
  onboardDate: string;
}

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet,CommonModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'] // Ensure this is styleUrls, not styleUrl
})

export class ClientListComponent {
  clients: Client[] = [
    { id: 'C0001', clientName: 'SMRT', email: 'support@gmail.com', project: '02', onboardDate: '12/07/2023' },
    { id: 'C0002', clientName: 'Hitachi', email: 'support@hithi.com', project: '04', onboardDate: '02/05/2023' },
    { id: 'C0003', clientName: 'BuildNT', email: 'support@buildnt.com', project: '04', onboardDate: '22/09/2023' },
    { id: 'C0004', clientName: 'Gaura', email: 'support@gaura.com', project: '02', onboardDate: '05/12/2023' },
  ];
}
