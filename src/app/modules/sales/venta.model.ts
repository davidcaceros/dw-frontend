export interface DetalleVentaRequest {
  idProducto: number | null;
  cantidad: number | null;
}

export interface VentaRequest {
  idCliente: number | null;
  idVendedor: number | null;
  tipoVenta: string;
  tipoPago: string;
  detalleVenta: DetalleVentaRequest[];
}
