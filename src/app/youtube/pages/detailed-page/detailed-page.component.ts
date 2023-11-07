import { Component, type OnInit, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { VideoHttpService } from '../../../core/services/video-http/video-http.service'
import type { Video } from '../../../shared/models/responce.model'

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  private videoEtag: string | null = null

  private videoHttpService = inject(VideoHttpService)

  private route = inject(ActivatedRoute)

  private router = inject(Router)

  video: Video | undefined = undefined

  ngOnInit(): void {
    this.videoEtag = this.route.snapshot.paramMap.get('etag')

    if (this.videoEtag) {
      this.video = this.videoHttpService.getVideoByEtag(this.videoEtag)
    }

    if (!this.video) {
      this.router.navigate(['404'])
    }
  }
}
