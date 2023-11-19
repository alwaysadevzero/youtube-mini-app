import { Injectable, inject } from '@angular/core'
import { BehaviorSubject, type Observable, map } from 'rxjs'
import type { UserCredential } from '../../../auth/models/user-credential.model'
import { StorageService } from '../storage/storage.service'
import { StorageField } from '../../../shared/enums/storage-field'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storageService = inject(StorageService)

  private userCredentialsSource = new BehaviorSubject<UserCredential | null>(null)

  constructor() {
    const credentials = this.storageService.getField<UserCredential>(StorageField.userCredentials)

    if (credentials) {
      this.login(credentials)
    }
  }

  public userCredentials$ = this.userCredentialsSource.asObservable()

  get userName$(): Observable<string | null> {
    return this.userCredentials$.pipe(
      map(credentials => {
        if (credentials) {
          return credentials.login
        }

        return 'Anonymous'
      }),
    )
  }

  logout(): void {
    this.userCredentialsSource.next(null)

    this.storageService.removeField(StorageField.userCredentials)
  }

  login(credentials: UserCredential): void {
    this.userCredentialsSource.next(credentials)

    this.storageService.setField<UserCredential>(StorageField.userCredentials, credentials)
  }
}
