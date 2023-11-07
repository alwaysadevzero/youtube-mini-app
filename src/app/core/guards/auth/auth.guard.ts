import { inject } from '@angular/core'
import { Router, type CanActivateFn } from '@angular/router'
import { tap } from 'rxjs'
import { AuthService } from '../../services/auth/auth.service'

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.userIsAuthorized$.pipe(
    tap(status => {
      if (!status) {
        router.navigate(['login'])
      }
    }),
  )
}
