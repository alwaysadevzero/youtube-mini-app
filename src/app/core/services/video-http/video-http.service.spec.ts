import { TestBed } from '@angular/core/testing'

import { VideoHttpService } from './video-http.service'

describe('VideoHttpService', () => {
  let service: VideoHttpService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(VideoHttpService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
