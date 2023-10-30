import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import data from '../response-mock/response.json'
import { SortSetting } from '../../shared/model/sort-setting.interface'

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsContainerComponent {
  @Input({ required: true }) sortSetting!: SortSetting

  items = data.items
}
