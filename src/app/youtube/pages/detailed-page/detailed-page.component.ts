import { Component, type OnInit, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { take } from 'rxjs/operators'
import { Location } from '@angular/common'
import { YoutubeHttpService } from '../../services/video-http/youtube-http.service'
import type { Video } from '../../../shared/models/responce.model'

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  private videoId: string | null = null

  private youtubeHttpService = inject(YoutubeHttpService)

  private route = inject(ActivatedRoute)

  private router = inject(Router)

  private location = inject(Location)

  video: Video | undefined = undefined

  ngOnInit(): void {
    this.videoId = this.route.snapshot.paramMap.get('id')

    if (!this.videoId) {
      this.router.navigate(['404'])

      return
    }

    this.youtubeHttpService
      .getVideoById(this.videoId)
      .pipe(take(1))
      .subscribe(video => {
        if (video) {
          this.video = video
        } else {
          this.router.navigate(['404'])
        }
      })
  }

  goBack(): void {
    this.location.back()
  }
}
