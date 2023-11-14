import { Component, inject } from '@angular/core'
import { map } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import type { Video } from '../../../shared/models/responce.model'

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent {
  private route = inject(ActivatedRoute)

  private location = inject(Location)

  video$ = this.route.data.pipe(map(({ video }) => video as Video))

  goBack(): void {
    this.location.back()
  }
}
