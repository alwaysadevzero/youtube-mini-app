import { Pipe, type PipeTransform } from '@angular/core'
import type { Video } from '../../shared/models/responce.model'
import type { SortSetting } from '../../shared/models/sort-setting.model'

@Pipe({
  name: 'filterVideoByTitlePipe',
})
export class FilterVideoByTitlePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: Video[], filterString: SortSetting['sortByTitle']): Video[] {
    if (!value || !filterString) {
      return value
    }

    const lowerCaseFilterString = filterString.toLowerCase()

    return value.filter(video => video.snippet.title.toLowerCase().includes(lowerCaseFilterString))
  }
}
