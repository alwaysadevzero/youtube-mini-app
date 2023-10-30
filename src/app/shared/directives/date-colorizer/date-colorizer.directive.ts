import { type OnInit, Directive, ElementRef, Input, Renderer2, inject } from '@angular/core'

const enum ColorClass {
  blue = 'color-blue',
  green = 'color-green',
  yellow = 'color-yellow',
  red = 'color-red',
}

@Directive({
  selector: '[appDateToColor]',
})
export class DateColorizerDirective implements OnInit {
  @Input() public date!: string

  private renderer = inject(Renderer2)

  private element = inject(ElementRef)

  private readonly oneDayInMilliseconds = 24 * 60 * 60 * 1000

  // eslint-disable-next-line class-methods-use-this
  private getColorClassByDate(date: Date): ColorClass {
    const currentDate = new Date()
    const diffInDays = Math.floor(
      (currentDate.getTime() - date.getTime()) / this.oneDayInMilliseconds,
    )

    if (diffInDays <= 7) {
      return ColorClass.blue
    }

    if (diffInDays <= 30) {
      return ColorClass.green
    }

    if (diffInDays <= 180) {
      return ColorClass.yellow
    }

    return ColorClass.red
  }

  ngOnInit(): void {
    const dateInstance = new Date(this.date)
    const colorClass = this.getColorClassByDate(dateInstance)

    this.renderer.addClass(this.element.nativeElement, colorClass)
  }
}
