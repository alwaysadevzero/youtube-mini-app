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

  private userIsAuthorizedSource = new BehaviorSubject<boolean>(false)

  private userCredentialsSource = new BehaviorSubject<UserCredential>({
    login: null,
    password: null,
  })

  constructor() {
    const credentials = this.storageService.getField<UserCredential>(StorageField.userCredentials)

    if (credentials) {
      this.login(credentials)
    }
  }

  public userIsAuthorized$ = this.userIsAuthorizedSource.asObservable()

  public userCredentials$ = this.userCredentialsSource.asObservable()

  get userName$(): Observable<string> {
    return this.userCredentials$.pipe(
      map((credentials: UserCredential) => {
        if (!credentials.login) {
          return 'Anonymous'
        }

        return credentials.login
      }),
    )
  }

  logout(): void {
    this.userIsAuthorizedSource.next(false)
    this.userCredentialsSource.next({
      login: null,
      password: null,
    })

    this.storageService.removeField(StorageField.userCredentials)
  }

  login(credentials: UserCredential): void {
    this.userCredentialsSource.next(credentials)
    this.userIsAuthorizedSource.next(true)

    this.storageService.setField<UserCredential>(StorageField.userCredentials, credentials)
  }
}
