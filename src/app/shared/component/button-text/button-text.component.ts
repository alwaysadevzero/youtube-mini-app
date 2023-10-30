import { Component } from '@angular/core'
import { TuiButtonModule } from '@taiga-ui/core'

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss'],
  standalone: true,
  imports: [TuiButtonModule],
})
export class ButtonTextComponent {}
