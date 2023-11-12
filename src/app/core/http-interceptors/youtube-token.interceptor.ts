import { Injectable } from '@angular/core'
import type { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import type { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'

@Injectable()
export class YoutubeTokenInterceptor implements HttpInterceptor {
  private apiKey = environment.api_key

  private baseUrl = environment.api_url

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.startsWith(this.baseUrl)) {
      return next.handle(request)
    }

    const modifiedReq = request.clone({
      setParams: { key: this.apiKey },
    })

    return next.handle(modifiedReq)
  }
}
