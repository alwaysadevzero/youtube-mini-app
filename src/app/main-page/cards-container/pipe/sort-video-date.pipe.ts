import { Pipe, type PipeTransform } from '@angular/core'
import type { Video } from '../../models/responce.interface'
import { SortSettingType } from '../../../shared/enums/sort-setting'

@Pipe({
  name: 'sortVideoByDatePipe',
})
export class SortVideoByDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: Video[], sortDateSetting: SortSettingType | null): Video[] {
    if (!value || !sortDateSetting) {
      return value
    }

    return value.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt)
      const dateB = new Date(b.snippet.publishedAt)

      return sortDateSetting === SortSettingType.asc
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime()
    })
  }
}
