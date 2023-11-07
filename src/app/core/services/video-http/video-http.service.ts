import { Injectable } from '@angular/core'
import data from '../../data/response-mock/response.json'
import type { Video } from '../../../shared/models/responce.model'

@Injectable({
  providedIn: 'root',
})
export class VideoHttpService {
  public videos: Video[] = data.items

  getVideoByEtag(etag: string): Video | undefined {
    return this.videos.find(video => video.etag === etag)
  }
}
