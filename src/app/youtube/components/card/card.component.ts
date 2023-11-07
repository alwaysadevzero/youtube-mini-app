import { Component, Input } from '@angular/core'
import { type Video } from '../../models/responce.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true }) item!: Video
}
