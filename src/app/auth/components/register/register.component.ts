import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  isPasswordVisible: WritableSignal<boolean> = signal(false);
  isFormSubmitted: WritableSignal<boolean> = signal(false);
  isRegistering: WritableSignal<boolean> = signal(false);
  registerForm!: FormGroup;

  constructor() {
    this.registerForm = this._formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$')]]
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.update((value) => !value)
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.registerForm.invalid) {
      return;
    }
    this.isRegistering.set(true);
    console.log(this.registerForm.value);
  }
}
