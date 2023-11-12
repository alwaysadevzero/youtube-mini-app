import { Injectable, inject } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, switchMap, type Observable, BehaviorSubject } from 'rxjs'
import { environment } from '../../../../environments/environment'
import type {
  Video,
  SearchListResponse,
  SearchListResponseById,
} from '../../../shared/models/responce.model'

@Injectable({
  providedIn: 'root',
})
export class YoutubeHttpService {
  private httpClient = inject(HttpClient)

  private baseUrl = environment.api_url

  public videosSource = new BehaviorSubject<Video[]>([])

  public videos$ = this.videosSource.asObservable()

  constructor() {
    this.searchVideos()
  }

  public searchVideos(query?: string): void {
    this.getVideos(query).subscribe(videos => {
      this.videosSource.next(videos)
    })
  }

  public getVideoById(id: string): Observable<Video> {
    return this.getSearchListById(id).pipe(map(response => response.items[0]))
  }

  private getVideos(query?: string): Observable<Video[]> {
    return this.getSearchList(query).pipe(
      map(response => response.items.map(item => item.id.videoId)),
      switchMap(ids => this.getSearchListById(...ids)),
      map(response => response.items),
    )
  }

  private getSearchList(query?: string, maxResult = 15): Observable<SearchListResponse> {
    const url = `${this.baseUrl}search`
    let params = new HttpParams({
      fromObject: {
        type: 'video',
        part: 'snippet',
        maxResults: maxResult,
      },
    })

    if (query) {
      params = params.append('q', query)
    }

    return this.httpClient.get<SearchListResponse>(url, { params })
  }

  private getSearchListById(...id: string[]): Observable<SearchListResponseById> {
    const url = `${this.baseUrl}videos`
    const ids = id.join(',')
    const params = new HttpParams({
      fromObject: {
        part: 'snippet,statistics',
        id: ids,
      },
    })

    return this.httpClient.get<SearchListResponseById>(url, { params })
  }
}
