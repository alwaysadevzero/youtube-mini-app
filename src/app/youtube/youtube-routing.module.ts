import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { MainPageComponent } from './pages/main/main-page.component'
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component'
import { authGuard } from '../core/guards/auth/auth.guard'
import { videoResolver } from '../core/resolver/video.resolver'

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'detail/:id',
    component: DetailedPageComponent,
    canMatch: [authGuard],
    resolve: { video: videoResolver },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
