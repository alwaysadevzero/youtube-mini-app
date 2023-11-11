import { inject } from '@angular/core'
import { Router, type CanActivateFn } from '@angular/router'
import { map } from 'rxjs'
import { AuthService } from '../../services/auth/auth.service'

export const authGuard: CanActivateFn = () => {
  const router = inject(Router)

  return inject(AuthService).userCredentials$.pipe(
    map(credentials => {
      if (!credentials) {
        return router.createUrlTree(['/login'])
      }

      return true
    }),
  )
}
