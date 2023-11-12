export interface SearchListResponseById extends Omit<SearchListResponse, 'items'> {
  items: Video[]
}

export interface SearchListResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TODO: string
  kind: string
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: ResponseVideo[]
}

interface ResponseVideo extends Omit<Video, 'statistics' | 'id'> {
  id: {
    kind: 'youtube#video'
    videoId: string
  }
}

export interface Video {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: Thumbnail
      medium: Thumbnail
      high: Thumbnail
      standard: Thumbnail
      maxres: Thumbnail
    }
    channelTitle: string
    tags: string[]
    categoryId: string
    liveBroadcastContent: string
    localized: {
      title: string
      description: string
    }
    defaultAudioLanguage: string
  }
  statistics: {
    viewCount: string
    likeCount: string
    dislikeCount: string
    favoriteCount: string
    commentCount: string
  }
}

interface Thumbnail {
  url: string
  width: number
  height: number
}
