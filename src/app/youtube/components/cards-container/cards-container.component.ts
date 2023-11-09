import { Component, type OnInit, inject, DestroyRef } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import type { SortSetting } from '../../../shared/models/sort-setting.model'
import { SearchSettingsService } from '../../services/search-settings.service'
import { VideoHttpService } from '../../../core/services/video-http/video-http.service'

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent implements OnInit {
  private searchSettings = inject(SearchSettingsService)

  private destroyRef = inject(DestroyRef)

  private youtubeHttp = inject(VideoHttpService)

  items = this.youtubeHttp.videos

  sortSettings: SortSetting = {
    sortByDate: null,
    sortByViewCount: null,
    sortByTitle: null,
  }

  ngOnInit() {
    this.searchSettings.searchSettings$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searchSettings: SortSetting) => {
        this.sortSettings = searchSettings
      })
  }
}
