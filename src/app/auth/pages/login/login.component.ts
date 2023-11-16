import { Component, inject } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit'
import { Router } from '@angular/router'
import type { UserCredential } from '../../models/user-credential.model'
import { AuthService } from '../../../core/services/auth/auth.service'
import { CustomValidators } from '../../../core/validators/customValidator'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        email: 'Enter a valid email',
        maxlength: ({ requiredLength }: { requiredLength: number }) =>
          `Maximum password length — ${requiredLength}`,
        minlength: ({ requiredLength }: { requiredLength: number }) =>
          `Minimum password length — ${requiredLength}`,
      },
    },
  ],
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder)

  private authService = inject(AuthService)

  private router = inject(Router)

  authForm = this.fb.group({
    login: ['', [CustomValidators.required('Please enter a login email'), Validators.email]],
    password: [
      '',
      [
        Validators.minLength(8),
        Validators.maxLength(20),
        CustomValidators.required('Please enter a password'),
        CustomValidators.mixedCase('required a mixture of both uppercase and lowercase letters'),
        CustomValidators.lettersAndNumbers('required a mixture of letters and numbers'),
        CustomValidators.specialCharacter('required a special character'),
      ],
    ],
  })

  public submitForm(): void {
    const credentials: UserCredential = this.authForm.getRawValue()

    this.authService.login(credentials)

    this.router.navigate(['main'])
  }
}
