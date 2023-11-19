/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setField<T>(name: string, value: T): void {
    localStorage.setItem(name, JSON.stringify(value))
  }

  removeField(name: string): void {
    if (localStorage.getItem(name)) {
      localStorage.removeItem(name)
    }
  }

  getField<T>(name: string): T | null {
    const parsed = localStorage.getItem(name)

    if (parsed) {
      return JSON.parse(parsed) as T
    }

    return null
  }
}
