import { NgModule } from '@angular/core'
import { TuiLazyLoadingModule, TuiIslandModule } from '@taiga-ui/kit'
import { TuiSvgModule, TuiButtonModule } from '@taiga-ui/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../core/components/header/header.component'
import { MainPageComponent } from './main-page.component'
import { CardComponent } from './card/card.component'
import { CardsContainerComponent } from './cards-container/cards-container.component'
import { DateColorizerDirective } from '../shared/directives/date-colorizer/date-colorizer.directive'
import { SortVideoByDatePipe } from './cards-container/pipe/sort-video-date.pipe'
import { SortVideoByViewsPipe } from './cards-container/pipe/sort-video-views.pipe'
import { FilterVideoByTitlePipe } from './cards-container/pipe/filter-video-title.pipe'
import { ButtonTextComponent } from '../shared/component/button-text/button-text.component'

@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    CardsContainerComponent,
    DateColorizerDirective,
    SortVideoByDatePipe,
    SortVideoByViewsPipe,
    FilterVideoByTitlePipe,
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonTextComponent,
    TuiLazyLoadingModule,
    TuiIslandModule,
    TuiSvgModule,
    TuiButtonModule,
  ],
})
export class MainPageModule {}
