import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-button',
  template: `
    <button
      class="btn {{ styleClass }}"
      type="submit"
      (click)="onConfirm()"
      [disabled]="loading || validForm"
    >
      {{ loading ? loadingLabel : label }}
      <img
        *ngIf="loading"
        src="assets/img/loader-button.gif"
        alt="loading"
        width="20px"
      />
    </button>
  `,
})
export class ConfirmButtonComponent implements OnInit {
  /**
   * @param {boolean} loading - Variable encargada de desabilitar el boton y poner el gift de cargando cuando es true
   * @param {string} label - Texto del botón cuando loading es false
   * @param {string} loadingLabel - Texto del botón cuando loading es true
   * @param {boolean} validForm - Recive si el formulario del componente padre es valido
   * @param {string} styleClass - Atributo class del botón para aplicar estilos
   * @param {EventEmitter} confirm - Emite el evento hacia el componente padre de cuando el botón es presionado
   */
  @Input() loading: boolean = false;
  @Input() label?: string = 'Guardar';
  @Input() loadingLabel?: string = 'Guardando';
  @Input() validForm?: boolean = false;
  @Output() confirm = new EventEmitter<void>();
  @Input() styleClass?: string = 'btn-primary';

  constructor() {}

  ngOnInit(): void {}

  onConfirm() {
    this.confirm.emit();
  }
}
