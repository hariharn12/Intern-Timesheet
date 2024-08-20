import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../shared-data.service';

interface Client {
  id: string;
  clientName: string;
  email: string;
  project: string;
  onboardDate: string;
  path: string;
}

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'], // Ensure this is styleUrls, not styleUrl
})
export class ClientListComponent {
  clients: Client[] = [];
  constructor(private newsharedDataService: SharedDataService) { 
  }
  ngOnInit() {
    this.clients = this.newsharedDataService.getData();
  }
  
}
