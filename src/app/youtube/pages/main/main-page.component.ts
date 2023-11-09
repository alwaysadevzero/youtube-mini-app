import { Component, type OnInit, inject, DestroyRef } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { SearchSettingsService } from '../../services/search-settings.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  private searchSettings = inject(SearchSettingsService)

  private destroyRef = inject(DestroyRef)

  showVideos = false

  ngOnInit() {
    this.searchSettings.searchVideos$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searchVideos: boolean) => {
        this.showVideos = searchVideos
      })
  }
}
