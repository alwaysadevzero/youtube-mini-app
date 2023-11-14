import { TestBed } from '@angular/core/testing'

import { SearchVideoYoutubeService } from './search-video-youtube.service'

describe('SearchVideoYoutubeService', () => {
  let service: SearchVideoYoutubeService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SearchVideoYoutubeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
