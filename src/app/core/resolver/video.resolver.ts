import { inject } from '@angular/core'
import { Router, type ResolveFn } from '@angular/router'
import { take, tap } from 'rxjs/operators'
import { type Observable } from 'rxjs'
import type { Video } from '../../shared/models/responce.model'
import { SearchVideoYoutubeService } from '../../youtube/services/search-video-youtube/search-video-youtube.service'

export const videoResolver: ResolveFn<Observable<Video> | null> = route => {
  const router = inject(Router)
  const searchVideoYoutubeService = inject(SearchVideoYoutubeService)

  const videoId = route.paramMap.get('id')

  if (videoId) {
    return searchVideoYoutubeService.searchVideoById(videoId).pipe(
      take(1),
      tap(video => {
        if (!video) {
          router.navigate(['404'])
        }
      }),
    )
  }

  router.navigate(['404'])

  return null
}
