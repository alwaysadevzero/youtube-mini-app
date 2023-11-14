import { Injectable, inject } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import type { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import type {
  SearchListResponse,
  SearchListResponseById,
} from '../../../shared/models/responce.model'

@Injectable({
  providedIn: 'root',
})
export class YoutubeHttpService {
  private httpClient = inject(HttpClient)

  private baseUrl = environment.api_url

  public getSearchList(query?: string, maxResult = 15): Observable<SearchListResponse> {
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

  public getSearchListById(...id: string[]): Observable<SearchListResponseById> {
    const url = `${this.baseUrl}videos`
    const params = new HttpParams({
      fromObject: {
        part: 'snippet,statistics',
        id,
      },
    })

    return this.httpClient.get<SearchListResponseById>(url, { params })
  }
}
