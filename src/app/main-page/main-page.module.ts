import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../core/components/header/header.component'
import { MainPageComponent } from './main-page.component'

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, HeaderComponent],
  exports: [HeaderComponent],
})
export class MainPageModule {}
