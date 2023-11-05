import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { MainPageComponent } from './youtube/pages/main/main-page.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'main',
    title: 'Main',
    component: MainPageComponent,
  },
  {
    path: '**',
    title: '404 - Not found',
    loadComponent: () =>
      import('./core/pages/not-found/not-found.component').then(
        component => component.NotFoundComponent,
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
