export const ErrorMessages: any = {
  required: (meta: any) => 'El campo es obligatorio',
  email: (meta: any) => 'El campo debe ser un correo válido',
  minlength: (meta: any) =>
    `El campo debe tener mínimo ${meta.requiredLength} caracteres`,
  maxlength: (meta: any) =>
    `El campo debe tener máximo ${meta.requiredLength} caracteres`,
  badCredentials: (meta: any) => `Correo y/o contraseña incorrectos`,
  notSame: (meta: any) => 'Los campos deben ser iguales',
  number: (meta: any) => 'El campo debe de ser numerico',
  firstChoose: (meta: any) => 'Primero selecciona un registro',
  chooseOne: (meta: any) => 'Debes elegir almenos un registro',
  invoiceDuplicated: (meta: any) => 'Factura ya registrada',
  duplicated: (meta: any) => 'Registro duplicado',
  auth_duplicated: (meta: any) => '¡El correo ya esta registrado!',
  rfc: (meta: any) => 'Ingresa un rfc valido',
  min: (meta: any) => `El valor minímo es ${meta.min}`,
  max: (meta: any) => `El valor maximo es ${meta.max}`,
};
