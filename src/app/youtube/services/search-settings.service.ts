import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import type { SortSetting } from 'src/app/shared/models/sort-setting.interface'

@Injectable()
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

  public onSearchVideosEvent(searchVideos: boolean) {
    this.searchVideosSource.next(searchVideos)
  }
}
