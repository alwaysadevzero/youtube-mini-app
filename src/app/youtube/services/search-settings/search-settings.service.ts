import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import type { SortSetting } from 'src/app/shared/models/sort-setting.model'

@Injectable({ providedIn: 'root' })
export class SearchSettingsService {
  private searchSettingsSource = new BehaviorSubject<SortSetting>({
    sortByDate: null,
    sortByViewCount: null,
    sortByTitle: null,
  })

  public searchSettings$ = this.searchSettingsSource.asObservable()

  public onSearchSettingsEvent(sortSettings: SortSetting) {
    this.searchSettingsSource.next(sortSettings)
  }
}
