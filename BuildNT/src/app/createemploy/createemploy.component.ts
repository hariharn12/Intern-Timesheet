import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-createemploy',
  standalone: true,
  imports: [RouterLink,RouterOutlet, MatTabsModule],
  templateUrl: './createemploy.component.html',
  styleUrl: './createemploy.component.css'
})
export class CreateemployComponent {

}
