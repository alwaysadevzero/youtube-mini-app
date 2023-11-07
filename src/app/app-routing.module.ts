import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { authGuard } from './core/guards/auth/auth.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'main',
    title: 'Main',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canMatch: [authGuard],
  },
  {
    path: 'login',
    title: 'Auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '404',
    title: '404 - Not found',
    loadComponent: () =>
      import('./core/pages/not-found/not-found.component').then(
        component => component.NotFoundComponent,
      ),
  },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
