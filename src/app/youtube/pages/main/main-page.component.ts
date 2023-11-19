import { Component, inject } from '@angular/core'
import { SearchSettingsService } from '../../services/search-settings/search-settings.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  private searchSettings = inject(SearchSettingsService)
}
