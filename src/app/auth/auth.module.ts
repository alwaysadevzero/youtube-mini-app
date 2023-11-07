import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import {
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiButtonModule,
  TuiErrorModule,
  TuiHintModule,
  TuiTextfieldControllerModule,
  TuiNotificationModule,
} from '@taiga-ui/core'
import {
  TuiInputModule,
  TuiInputPasswordModule,
  TuiTextAreaModule,
  TuiSelectModule,
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule,
} from '@taiga-ui/kit'
import { LoginComponent } from './pages/login/login.component'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    CommonModule,
    TuiInputModule,
    TuiInputPasswordModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    FormsModule,
    TuiButtonModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule,
    TuiHintModule,
    TuiTextfieldControllerModule,
    TuiNotificationModule,
  ],
})
export class AuthModule {}
