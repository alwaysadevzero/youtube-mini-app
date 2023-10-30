import { Component, ViewChild, type AfterViewInit } from '@angular/core'
import { HeaderComponent } from '../core/components/header/header.component'
import type { SortSetting } from '../shared/model/sort-setting.interface'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild(HeaderComponent) childComponent!: HeaderComponent

  showCards = false

  sortSetting: SortSetting = {
    sortByViewCount: null,
    sortByDate: null,
    sortByTitle: '',
  }

  processSearchClick() {
    if (!this.showCards) this.showCards = true
  }

  ngAfterViewInit() {
    this.childComponent.settingsClick.subscribe((sortSetting: SortSetting) => {
      this.sortSetting = sortSetting
    })
  }
}
