import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-editempoly',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,  MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,MatTabsModule, MatDatepickerModule],
  templateUrl: './editempoly.component.html',
  styleUrl: './editempoly.component.css'
})
export class EditempolyComponent {
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
