import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

interface contact {
  contactPerson: string;
  position: string;
  phoneNumber: string;
  email: string;
}


@Component({
  selector: 'app-smrt-edit',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './smrt-edit.component.html',
  styleUrl: './smrt-edit.component.css',
})
export class SmrtEditComponent {
  
  // Define properties for input bindings
  newContactPerson: string = '';
  newPosition: string = '';
  newPhoneNumber: string = '';
  newEmail: string = '';
  selectedFiles: string | null = null;
  editingIndex: number | null = null;

  addContact(): void {
    if (
      this.newContactPerson &&
      this.newPosition &&
      this.newPhoneNumber &&
      this.newEmail
    ) {
      if (this.editingIndex !== null) {
        console.log(this.editingIndex);
        console.log(   this.contacts[this.editingIndex])
        console.log({
          contactPerson: this.newContactPerson,
          position: this.newPosition,
          phoneNumber: this.newPhoneNumber,
          email: this.newEmail,
        });
        
        // Update existing contact
        this.contacts[this.editingIndex] = {
          contactPerson: this.newContactPerson,
          position: this.newPosition,
          phoneNumber: this.newPhoneNumber,
          email: this.newEmail,
        };
        this.editingIndex = null; // Reset editing state
      } else {
        // Add new contact
        this.contacts.push({
          contactPerson: this.newContactPerson,
          position: this.newPosition,
          phoneNumber: this.newPhoneNumber,
          email: this.newEmail,
        });
      }

      // Reset input fields
      this.newContactPerson = '';
      this.newPosition = '';
      this.newPhoneNumber = '';
      this.newEmail = '';
    } else {
      alert('Please fill in all contact details.');
    }
  }

  editContact(index: number): void {
    console.log(this.newContactPerson, this.newPosition, this.newPhoneNumber,"ooooooo");
    
    const contact = this.contacts[index];
    this.newContactPerson = contact.contactPerson;
    this.newPosition = contact.position;
    this.newPhoneNumber = contact.phoneNumber;
    this.newEmail = contact.email;
    this.editingIndex = index;
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }

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
  contacts: contact[] = [
    {
      contactPerson: 'Ajay',
      position: 'Team Lead',
      email: 'support@gmail.com',
      phoneNumber: '847596857',
    },
  ];
}
