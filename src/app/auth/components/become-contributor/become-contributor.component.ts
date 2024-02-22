import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-become-contributor',
  templateUrl: './become-contributor.component.html',
  styleUrl: './become-contributor.component.scss'
})
export class BecomeContributorComponent {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  isPasswordVisible: WritableSignal<boolean> = signal(false);
  isFormSubmitted: WritableSignal<boolean> = signal(false);
  isBecomingContributor: WritableSignal<boolean> = signal(false);
  contributorForm!: FormGroup;

  constructor() {
    this.contributorForm = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$')]]
    })
  }

  get f() {
    return this.contributorForm.controls;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.update((value) => !value)
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.contributorForm.invalid) {
      return;
    }
    this.isBecomingContributor.set(true);
    console.log(this.contributorForm.value);
  }
}
