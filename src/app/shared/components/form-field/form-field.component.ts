import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationService } from 'src/app/common/services/validation.service';

@Component({
  selector: 'form-field',
  template: `
    <div class="form-group  {{ invalidClass(control) }}">
      <!-- ? Trasnclusion con ng-content -->
      <ng-content></ng-content>
      <div
        *ngIf="isInvalid(control)"
        class="invalid-feedback animated fadeInUp"
        style="display: block;"
      >
        {{ getErrorMessage(control) }}
      </div>
    </div>
  `,
  styles: [
    `
      .form-group {
        padding: 0;
      }
    `,
  ],
})
export class FormFieldComponent implements OnInit {
  /**
   * @param {AbstractControl} control - elemento del from group del componente padre
   */
  @Input()
  control!: AbstractControl;

  constructor(private validationService: ValidationService) {}

  ngOnInit(): void {}

  isInvalid(control: AbstractControl): boolean {
    return this.validationService.isInvalid(control);
  }

  invalidClass(control: AbstractControl): string {
    return this.validationService.invalidClass(control);
  }

  getErrorMessage(control: AbstractControl): string {
    return this.validationService.handleError(control);
  }
}
