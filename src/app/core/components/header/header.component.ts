import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { TuiActiveZoneModule } from '@taiga-ui/cdk'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { TuiInputModule, TuiActionModule } from '@taiga-ui/kit'
import { TuiTextfieldControllerModule, TuiButtonModule, TuiDropdownModule } from '@taiga-ui/core'
import { RouterModule } from '@angular/router'
import { TuiAvatarModule, TuiFallbackSrcModule } from '@taiga-ui/experimental'
import { SearchSettingsComponent } from './search-settings/search-settings.component'
import type { SortSetting } from '../../../shared/model/sort-setting.interface'

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() searchClick = new EventEmitter()

  @Output() settingsClick = new EventEmitter<SortSetting>()

  onSearchSettingsEvent(event: SortSetting) {
    this.settingsClick.emit(event)
  }

  open = false

  settingsOnClick(): void {
    this.open = !this.open
  }

  onActiveZone(active: boolean): void {
    this.open = active && this.open
  }

  searchForm = new FormGroup({
    searchInput: new FormControl(),
  })
}
