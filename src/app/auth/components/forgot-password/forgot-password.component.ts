import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  isFormSubmitted: WritableSignal<boolean> = signal(false);
  isLoggingIn: WritableSignal<boolean> = signal(false);
  resetPasswordForm!: FormGroup;

  constructor() {
    this.resetPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.isLoggingIn.set(true);
    console.log(this.resetPasswordForm.value);
  }

}
