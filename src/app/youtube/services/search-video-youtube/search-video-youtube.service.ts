import { Injectable, inject } from '@angular/core'
import { type Observable, of } from 'rxjs'
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators'
import { YoutubeHttpService } from '../youtube-http/youtube-http.service'
import { SearchService } from '../../../core/services/search/search.service'
import type { Video } from '../../../shared/models/responce.model'

@Injectable({
  providedIn: 'root',
})
export class SearchVideoYoutubeService {
  private searchService = inject(SearchService)

  private youtubeHttpService = inject(YoutubeHttpService)

  public videos$ = this.searchService.search$.pipe(
    switchMap(query => this.getVideos(query)),
    shareReplay(1),
  )

  public searchVideoById(id: string): Observable<Video> {
    return this.youtubeHttpService.getSearchListById(id).pipe(map(response => response.items[0]))
  }

  public getVideos(query?: string): Observable<Video[]> {
    return this.youtubeHttpService.getSearchList(query).pipe(
      map(response => response.items.map(item => item.id.videoId)),
      switchMap(ids => this.youtubeHttpService.getSearchListById(...ids)),
      map(response => response.items),
      catchError(() => {
        console.error("Can't get videos")

        return of([])
      }),
    )
  }
}
