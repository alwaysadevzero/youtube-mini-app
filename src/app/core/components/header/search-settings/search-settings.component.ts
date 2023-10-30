import { Component, Output, EventEmitter, type OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
import { TuiToggleModule, TuiInputModule } from '@taiga-ui/kit'
import type { SortSetting } from '../../../../shared/model/sort-setting.interface'

@Component({
  selector: 'app-search-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TuiToggleModule, TuiInputModule],
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent implements OnInit {
  @Output() searchSettings = new EventEmitter<SortSetting>()

  sortForm = new FormGroup({
    sortByDate: new FormControl(),
    sortByViewCount: new FormControl(),
    sortByTitle: new FormControl(),
  })

  ngOnInit() {
    this.sortForm.valueChanges.subscribe(() => {
      const sortForm: SortSetting = {
        sortByDate: this.sortForm.get('sortByDate')?.value ? 'asc' : 'desc',
        sortByViewCount: this.sortForm.get('sortByViewCount')?.value ? 'asc' : 'desc',
        sortByTitle: this.sortForm.get('sortByTitle')?.value,
      }
      this.searchSettings.emit(sortForm)
    })
  }
}
