// login.component.ts

import { Component, ChangeDetectorRef, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { LoginService } from '@v2/services';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private loginService = inject(LoginService);
  protected fb = inject(FormBuilder);
  private cdRef = inject(ChangeDetectorRef);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  isLoading = false;
  errorMessage = '';

  // Validation variables
  hasLength: boolean = false;
  hasUppercase: boolean = false;
  hasSpecialChar: boolean = false;
  hasNumber: boolean = false;

  constructor() {
    this.loginForm
      .get('password')
      ?.valueChanges.subscribe((password: string) => {
        this.validatePassword(password);
      });
  }

  validatePassword(password: string) {
    this.hasLength = password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.hasNumber = /[0-9]/.test(password);
    this.cdRef.markForCheck(); // Ensure the view updates
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.cdRef.markForCheck();

    const { email, password } = this.loginForm.value;

    this.loginService.login({ correo: email, password }).subscribe({
      next: () => {
        // Handle successful login
        this.isLoading = false;
        this.cdRef.markForCheck();
      },
      error: (response) => {
        this.errorMessage =
          response?.error?.error || 'Error al iniciar sesión.';
        this.isLoading = false;
        this.cdRef.markForCheck();
      },
    });
  }
}
