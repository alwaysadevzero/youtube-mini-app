import { Component, inject, type OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
import { TuiToggleModule, TuiInputModule } from '@taiga-ui/kit'
import type { SortSetting } from '../../../shared/models/sort-setting.model'
import { SortSettingType } from '../../../shared/enums/sort-setting'
import { SearchSettingsService } from '../../../youtube/services/search-settings.service'

@Component({
  selector: 'app-search-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TuiToggleModule, TuiInputModule],
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent implements OnInit {
  private searchSettings = inject(SearchSettingsService)

  sortForm = new FormGroup({
    sortByDate: new FormControl(),
    sortByViewCount: new FormControl(),
    sortByTitle: new FormControl(),
  })

  ngOnInit() {
    this.sortForm.valueChanges.subscribe(() => {
      const sortForm = this.sortForm.getRawValue()

      const sortSettings: SortSetting = {
        sortByDate: sortForm.sortByDate ? SortSettingType.asc : SortSettingType.desc,
        sortByViewCount: sortForm.sortByViewCount ? SortSettingType.asc : SortSettingType.desc,
        sortByTitle: sortForm.sortByTitle,
      }

      this.searchSettings.onSearchSettingsEvent(sortSettings)
    })
  }
}
