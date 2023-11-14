import { Component, type OnInit, inject, DestroyRef } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import type { SortSetting } from '../../../shared/models/sort-setting.model'
import { SearchSettingsService } from '../../services/search-settings/search-settings.service'
import type { Video } from '../../../shared/models/responce.model'
import { SearchVideoYoutubeService } from '../../services/search-video-youtube/search-video-youtube.service'

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent implements OnInit {
  private searchSettings = inject(SearchSettingsService)

  private destroyRef = inject(DestroyRef)

  private searchYoutubeVideos = inject(SearchVideoYoutubeService)

  items: Video[] = []

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

    this.searchYoutubeVideos.videos$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(videos => {
      this.items = videos
    })
  }
}
