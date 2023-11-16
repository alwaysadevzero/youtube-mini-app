import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
import { TuiValidationError } from '@taiga-ui/cdk'

export class CustomValidators {
  static required(errorMessage = 'This field is required'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === '') {
        return { required: new TuiValidationError(errorMessage) }
      }

      return null
    }
  }

  static maxLength(maxLength: number, errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.length > maxLength) {
        return {
          maxlength: new TuiValidationError(errorMessage || `Maximum length is ${maxLength}`),
        }
      }

      return null
    }
  }

  static mixedCase(errorMessage = 'Must contain upper and lower case letters'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasUpperCase = /[A-Z]/.test(control.value)
      const hasLowerCase = /[a-z]/.test(control.value)

      if (hasUpperCase && hasLowerCase) {
        return null
      }

      return { mixedCase: new TuiValidationError(errorMessage) }
    }
  }

  static lettersAndNumbers(errorMessage = 'Must contain letters and numbers'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasLetters = /[A-Za-z]/.test(control.value)
      const hasNumbers = /\d/.test(control.value)

      if (hasLetters && hasNumbers) {
        return null
      }

      return { lettersAndNumbers: new TuiValidationError(errorMessage) }
    }
  }

  static specialCharacter(errorMessage = 'Must contain a special character'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSpecialCharacter = /[!@#?\]]/.test(control.value)

      if (hasSpecialCharacter) {
        return null
      }

      return { specialCharacter: new TuiValidationError(errorMessage) }
    }
  }

  static url(errorMessage = 'URL is invalid'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/

      if (!control.value || urlPattern.test(control.value)) {
        return null
      }

      return { url: new TuiValidationError(errorMessage) }
    }
  }
}
