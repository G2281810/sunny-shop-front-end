import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ConfirmButtonComponent } from './components/confirm-botton/confirm-botton.components';
@NgModule({
  declarations: [FormFieldComponent, ConfirmButtonComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPermissionsModule,
  ],
  exports: [
    FormFieldComponent,
    ConfirmButtonComponent,
    ReactiveFormsModule,
    NgxPermissionsModule,
    NgSelectModule,
    FormsModule,
  ],
})
export class SharedModule {}
