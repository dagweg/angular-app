import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: `./forms.component.html`,
  styleUrl: './forms.component.sass',
})
export class FormsComponent {
  applyForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    email: new FormControl<string>(''),
  });

  handleFormSubmit() {
    console.log('You are going to submit');
    console.log(this.applyForm.value.firstName);
    console.log(this.applyForm.value.lastName);
    console.log(this.applyForm.value.email);
  }
}
