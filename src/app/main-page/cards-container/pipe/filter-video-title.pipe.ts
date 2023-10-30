import { Pipe, type PipeTransform } from '@angular/core'
import type { Video } from '../../models/responce.interface'

@Pipe({
  name: 'filterVideoByTitlePipe',
})
export class FilterVideoByTitlePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: Video[], filterString: string | null): Video[] {
    if (!value || !filterString) {
      return value
    }

    const lowerCaseFilterString = filterString.toLowerCase()

    return value.filter(video => video.snippet.title.toLowerCase().includes(lowerCaseFilterString))
  }
}
