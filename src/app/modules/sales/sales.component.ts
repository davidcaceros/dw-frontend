import { Component, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { VentaRequest, DetalleVentaRequest } from './venta.model';

@Component({
  selector: 'sales-app',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  venta: VentaRequest = {
    idCliente: null,
    idVendedor: null,
    tipoVenta: 'MENOR',
    tipoPago: 'EFECTIVO',
    detalleVenta: [{ idProducto: null, cantidad: null }],
  };

  alertMessage: string | null = null;
  alertType: string = '';

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {}

  addDetalle() {
    this.venta.detalleVenta.push({ idProducto: null, cantidad: null });
  }

  onCreateVenta() {
    this.salesService.createVenta(this.venta).subscribe(
      (response) => {
        const idVenta = response?.idVenta || 'Desconocido';
        this.alertMessage = `Venta creada exitosamente. ID de Venta: ${idVenta}`;
        this.alertType = 'success';
        this.clearForm();
        this.autoDismissAlert();
      },
      (error) => {
        this.alertMessage = 'Ocurrió un error al crear la venta.';
        this.alertType = 'danger';
        console.error(error);
        this.autoDismissAlert();
      }
    );
  }

  autoDismissAlert() {
    setTimeout(() => {
      this.alertMessage = null;
      this.alertType = '';
    }, 5000);
  }

  clearForm() {
    this.venta = {
      idCliente: null,
      idVendedor: null,
      tipoVenta: 'MENOR',
      tipoPago: 'EFECTIVO',
      detalleVenta: [{ idProducto: null, cantidad: null }],
    };
  }

  removeDetalle(index: number) {
    this.venta.detalleVenta.splice(index, 1);
  }
}
