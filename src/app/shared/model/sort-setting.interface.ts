import type { SortSettingType } from '../enums/sort-setting'

export interface SortSetting {
  sortByDate: SortSettingType | null
  sortByViewCount: SortSettingType | null
  sortByTitle: string | null
}
