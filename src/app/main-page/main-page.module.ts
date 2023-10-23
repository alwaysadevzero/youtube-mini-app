import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../core/components/header/header.component'
import { MainPageComponent } from './main-page.component'
import { CardComponent } from './card/card.component'
import { CardsContainerComponent } from './cards-container/cards-container.component'

@NgModule({
  declarations: [MainPageComponent, CardComponent, CardsContainerComponent],
  imports: [CommonModule, HeaderComponent],
  exports: [HeaderComponent],
})
export class MainPageModule {}
