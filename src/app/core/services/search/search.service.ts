import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSource = new BehaviorSubject<string>('')

  public search$ = this.searchSource.asObservable()

  public search(query: string): void {
    this.searchSource.next(query)
  }
}
