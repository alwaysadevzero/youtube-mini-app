import { Component, type OnInit, inject } from '@angular/core'
import data from '../../response-mock/response.json'
import type { SortSetting } from '../../../shared/models/sort-setting.model'
import { SearchSettingsService } from '../../services/search-settings.service'

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent implements OnInit {
  private searchSettings = inject(SearchSettingsService)

  items = data.items

  sortSettings: SortSetting = {
    sortByDate: null,
    sortByViewCount: null,
    sortByTitle: null,
  }

  ngOnInit() {
    this.searchSettings.searchSettings$.subscribe((searchSettings: SortSetting) => {
      this.sortSettings = searchSettings
    })
  }
}
