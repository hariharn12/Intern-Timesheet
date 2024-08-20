import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CurrentprojectComponent } from '../../my-project/currentproject/currentproject.component';
import { CompleteprojectComponent } from '../../my-project/completeproject/completeproject.component';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-smrt',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    MatTabsModule,
    CurrentprojectComponent,
    CompleteprojectComponent,
  ],
  templateUrl: './smrt-details.component.html',
  styleUrl: './smrt-details.component.css',
})
export class SmrtComponent {
  client: any = {};

  constructor(
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService
  ) {}
  ngOnInit(): void {
    // Get the client ID from the route parameters
    const clientId = this.route.snapshot.paramMap.get('id');
    console.log(clientId, 'clientId');

    // Fetch client details from the service
    if (clientId) {
      this.client = this.sharedDataService.getClientById(clientId);
    }
  }
}
