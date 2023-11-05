import { NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { TuiActiveZoneModule } from '@taiga-ui/cdk'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { TuiInputModule, TuiActionModule } from '@taiga-ui/kit'
import { TuiTextfieldControllerModule, TuiButtonModule, TuiDropdownModule } from '@taiga-ui/core'
import { RouterModule } from '@angular/router'
import { TuiAvatarModule, TuiFallbackSrcModule } from '@taiga-ui/experimental'
import { SearchSettingsService } from '../../../youtube/services/search-settings.service'
import { SearchSettingsComponent } from '../search-settings/search-settings.component'

@Component({
  selector: 'app-header',
  imports: [
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
export class HeaderComponent {
  private searchSettings = inject(SearchSettingsService)

  isSearchSettingsMenuOpen = false

  settingsOnClick(): void {
    this.isSearchSettingsMenuOpen = !this.isSearchSettingsMenuOpen
  }

  onActiveZone(active: boolean): void {
    this.isSearchSettingsMenuOpen = active && this.isSearchSettingsMenuOpen
  }

  searchClick() {
    this.searchSettings.onSearchVideosEvent(true)
  }

  searchForm = new FormGroup({
    searchInput: new FormControl(),
  })
}
