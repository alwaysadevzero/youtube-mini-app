import { TestBed } from '@angular/core/testing'

import { SearchSettingsService } from './search-settings.service'

describe('SearchSettingsService', () => {
  let service: SearchSettingsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SearchSettingsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
