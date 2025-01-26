export interface Product {
  id?: number;
  nombre: string;
  referencia: string;
  marca: string;
  valor_h: number;
  descripcion: string;
  foto: File | null;
}
