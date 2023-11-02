import { Pipe, type PipeTransform } from '@angular/core'
import type { Video } from '../../models/responce.interface'
import type { SortSetting } from '../../../shared/model/sort-setting.interface'

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
