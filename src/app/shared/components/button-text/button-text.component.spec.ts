import { TestBed, type ComponentFixture } from '@angular/core/testing'

import { ButtonTextComponent } from './button-text.component'

describe('ButtonTextComponent', () => {
  let component: ButtonTextComponent
  let fixture: ComponentFixture<ButtonTextComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTextComponent],
    })
    fixture = TestBed.createComponent(ButtonTextComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
