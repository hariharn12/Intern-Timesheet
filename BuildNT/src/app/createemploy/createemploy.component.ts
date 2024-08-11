
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core'; 

@Component({
  selector: 'app-createemploy',
  standalone: true,
  imports: [RouterLink,RouterOutlet, MatTabsModule, MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule],
  templateUrl: './createemploy.component.html',
  styleUrl: './createemploy.component.css'
})
export class CreateemployComponent {
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
