import { NgModule } from '@angular/core'
import { TuiLazyLoadingModule, TuiIslandModule } from '@taiga-ui/kit'
import { TuiSvgModule, TuiButtonModule } from '@taiga-ui/core'
import { CommonModule } from '@angular/common'
import { MainPageComponent } from './pages/main/main-page.component'
import { CardComponent } from './components/card/card.component'
import { CardsContainerComponent } from './components/cards-container/cards-container.component'
import { DateColorizerDirective } from '../shared/directives/date-colorizer/date-colorizer.directive'
import { SortVideoByDatePipe } from './pipes/sort-video-date.pipe'
import { SortVideoByViewsPipe } from './pipes/sort-video-views.pipe'
import { FilterVideoByTitlePipe } from './pipes/filter-video-title.pipe'
import { ButtonTextComponent } from '../shared/components/button-text/button-text.component'
import { YoutubeRoutingModule } from './youtube-routing.module'
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component'

@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    CardsContainerComponent,
    DateColorizerDirective,
    SortVideoByDatePipe,
    SortVideoByViewsPipe,
    FilterVideoByTitlePipe,
    DetailedPageComponent,
  ],
  imports: [
    YoutubeRoutingModule,
    CommonModule,
    ButtonTextComponent,
    TuiLazyLoadingModule,
    TuiIslandModule,
    TuiSvgModule,
    TuiButtonModule,
  ],
})
export class YoutubeModule {}
