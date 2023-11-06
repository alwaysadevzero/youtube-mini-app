import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { MainPageComponent } from './pages/main/main-page.component'

const routes: Routes = [{ path: '', component: MainPageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
