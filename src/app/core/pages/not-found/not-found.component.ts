import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TuiBlockStatusModule } from '@taiga-ui/layout'

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, TuiBlockStatusModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {}
