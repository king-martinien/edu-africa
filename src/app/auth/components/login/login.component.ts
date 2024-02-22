import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  isPasswordVisible: WritableSignal<boolean> = signal(false);
  isFormSubmitted: WritableSignal<boolean> = signal(false);
  isLoggingIn: WritableSignal<boolean> = signal(false);
  loginForm!: FormGroup;

  constructor() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.update((value) => !value)
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoggingIn.set(true);
    console.log(this.loginForm.value);
  }
}
