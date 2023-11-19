import { TestBed, type ComponentFixture } from '@angular/core/testing'

import { CardComponent } from './card.component'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    })
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
