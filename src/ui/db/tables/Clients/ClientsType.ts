export interface Client {
  id?: number;
  nit_cedula: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  celular: string;
  correo: string;
  correo_opcional: string;
  fecha_registro: string;
  encargado: string;
  cargo: string;
  tipoPago: PaymentType | string;
}

export enum PaymentType {
  Contado = "Contado",
  Credito15 = "Credito 15",
  Credito30 = "Credito 30",
  Credito60 = "Credito 60",
}
