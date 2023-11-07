import { Component, inject } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import type { UserCredential } from '../../models/user-credential.model'
import { AuthService } from '../../../core/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder)

  private authService = inject(AuthService)

  private router = inject(Router)

  authForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  })

  public submitForm(): void {
    const credentials: UserCredential = this.authForm.getRawValue()

    this.authService.login(credentials)

    this.router.navigate(['main'])
  }
}
