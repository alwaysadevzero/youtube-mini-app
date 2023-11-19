import { TestBed } from '@angular/core/testing'

import { YoutubeTokenInterceptor } from './youtube-token.interceptor'

describe('YoutubeTokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [YoutubeTokenInterceptor],
    }),
  )

  it('should be created', () => {
    const interceptor: YoutubeTokenInterceptor = TestBed.inject(YoutubeTokenInterceptor)
    expect(interceptor).toBeTruthy()
  })
})
