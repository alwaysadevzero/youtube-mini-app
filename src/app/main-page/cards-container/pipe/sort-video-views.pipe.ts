import { Pipe, type PipeTransform } from '@angular/core'
import type { Video } from '../../models/responce.interface'

@Pipe({
  name: 'sortVideoByViewsPipe',
})
export class SortVideoByViewsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: Video[], sortViewsSetting: 'asc' | 'desc' | null): Video[] {
    if (!value || !sortViewsSetting) {
      return value
    }

    return value.sort((a, b) => {
      const viewCountA = Number(a.statistics.viewCount)
      const viewCountB = Number(b.statistics.viewCount)

      return sortViewsSetting === 'asc' ? viewCountA - viewCountB : viewCountB - viewCountA
    })
  }
}
