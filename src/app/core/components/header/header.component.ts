import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, DestroyRef, type OnInit, inject } from '@angular/core'
import { TuiActiveZoneModule } from '@taiga-ui/cdk'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { TuiInputModule, TuiActionModule } from '@taiga-ui/kit'
import { TuiTextfieldControllerModule, TuiButtonModule, TuiDropdownModule } from '@taiga-ui/core'
import { Router, RouterModule } from '@angular/router'
import { TuiAvatarModule, TuiFallbackSrcModule } from '@taiga-ui/experimental'
import { debounceTime, filter } from 'rxjs/operators'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { SearchSettingsComponent } from '../search-settings/search-settings.component'
import { AuthService } from '../../services/auth/auth.service'
import { YoutubeHttpService } from '../../../youtube/services/video-http/youtube-http.service'

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    NgOptimizedImage,
    RouterModule,
    TuiActionModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiFallbackSrcModule,
    TuiDropdownModule,
    TuiActiveZoneModule,
    SearchSettingsComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService)

  private destroyRef = inject(DestroyRef)

  private youtubeHttp = inject(YoutubeHttpService)

  private router = inject(Router)

  userCredentials$ = this.authService.userCredentials$

  userName$ = this.authService.userName$

  isSearchSettingsMenuOpen = false

  searchForm = new FormGroup({
    searchInput: new FormControl('', { nonNullable: true }),
  })

  ngOnInit(): void {
    this.searchForm.controls.searchInput.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(str => str.length > 2),
        debounceTime(500),
      )
      .subscribe(value => {
        this.youtubeHttp.searchVideos(value)
      })
  }

  settingsOnClick(): void {
    this.isSearchSettingsMenuOpen = !this.isSearchSettingsMenuOpen
  }

  onActiveZone(active: boolean): void {
    this.isSearchSettingsMenuOpen = active && this.isSearchSettingsMenuOpen
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['login'])
  }

  login() {
    this.router.navigate(['login'])
  }
}
