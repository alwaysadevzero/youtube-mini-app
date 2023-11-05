import { Component, type OnInit, inject } from '@angular/core'
import { SearchSettingsService } from '../../services/search-settings.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  private searchSettings = inject(SearchSettingsService)

  showVideos = false

  ngOnInit() {
    this.searchSettings.searchVideos$.subscribe((searchVideos: boolean) => {
      this.showVideos = searchVideos
    })
  }
}
