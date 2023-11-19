import { ChangeDetectionStrategy, Component, type OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import {
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiDropdownModule,
  TuiErrorModule,
} from '@taiga-ui/core'
import { TuiFallbackSrcModule } from '@taiga-ui/experimental'
import {
  TuiInputModule,
  TuiActionModule,
  TuiIslandModule,
  TuiFieldErrorPipeModule,
  TUI_VALIDATION_ERRORS,
  TuiInputDateModule,
  TuiInputTagModule,
  TuiTagModule,
} from '@taiga-ui/kit'

import { TuiDay } from '@taiga-ui/cdk'
import { CustomValidators } from '../core/validators/customValidator'

type DateType = null | TuiDay

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiActionModule,
    TuiButtonModule,
    TuiFallbackSrcModule,
    TuiDropdownModule,
    TuiIslandModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    FormsModule,
    TuiInputDateModule,
    TuiInputTagModule,
    TuiTagModule,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        maxlength: 'The title is too long',
        minlength: `The title is too short `,
      },
    },
  ],
})
export class AdminComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder)

  maxDate = TuiDay.currentLocal()

  minDate = TuiDay.fromLocalNativeDate(new Date(1920, 0, 1))

  tags: string[] = []

  tagsInputHidden = false

  maxTags = 5

  cardForm = this.fb.group({
    titleControl: [
      '',
      [
        CustomValidators.required('Please enter a title'),
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
    ],
    descriptionControl: ['', [CustomValidators.maxLength(255, 'The description is too long')]],
    imgLinkControl: [
      '',
      [
        CustomValidators.required('Please enter a link to the image'),
        CustomValidators.url('image url is invalid'),
      ],
    ],
    videoLinkControl: [
      '',
      [
        CustomValidators.required('Please enter a link to the video'),
        CustomValidators.url('video url is invalid'),
      ],
    ],
    dateControl: [null as DateType, [Validators.required]],
    tagsControl: [[] as string[]],
  })

  ngOnInit(): void {
    this.cardForm.controls.tagsControl.valueChanges.subscribe((value: string[]) => {
      this.tagsInputHidden = value.length >= this.maxTags
    })
  }
}
