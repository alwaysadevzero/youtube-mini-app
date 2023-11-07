import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import type { SortSetting } from 'src/app/shared/models/sort-setting.model'

@Injectable({ providedIn: 'root' })
export class SearchSettingsService {
  private searchVideosSource = new BehaviorSubject<boolean>(false)

  private searchSettingsSource = new BehaviorSubject<SortSetting>({
    sortByDate: null,
    sortByViewCount: null,
    sortByTitle: null,
  })

  public searchSettings$ = this.searchSettingsSource.asObservable()

  public searchVideos$ = this.searchVideosSource.asObservable()

  public onSearchSettingsEvent(sortSettings: SortSetting) {
    this.searchSettingsSource.next(sortSettings)
  }

  public onSearchVideosEvent(showVideos: boolean) {
    this.searchVideosSource.next(showVideos)
  }
}
