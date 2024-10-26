import { Component, OnInit } from '@angular/core';
import { CreditNotesService } from './credit-notes.service';
import * as bootstrap from 'bootstrap'; // Importa Bootstrap

@Component({
  selector: 'app-credit-notes',
  templateUrl: './credit-notes.component.html',
  styleUrls: ['./credit-notes.component.css']
})
export class CreditNotesComponent implements OnInit {
  ventas: any[] = [];
  ventaSeleccionada: any = null;

  // Inyecta el servicio en el constructor
  constructor(private creditNotesService: CreditNotesService) {}

  ngOnInit(): void {
    // Llama al método del servicio para obtener las ventas
    this.obtenerVentas();
  }

  obtenerVentas(): void {
    this.creditNotesService.getVentas().subscribe({
      next: (data) => {
        this.ventas = data; // Asigna los datos de ventas obtenidos a la variable ventas
      },
      error: (error) => {
        console.error('Error al obtener las ventas:', error);
      }
    });
  }

  mostrarDetalles(venta: any): void {
    this.ventaSeleccionada = venta;
    const modalElement = document.getElementById('detallesModal');  // Obtener el modal

    // Verifica si modalElement no es nulo
    if (modalElement) {
      const detallesModal = new bootstrap.Modal(modalElement);  // Inicializa el modal
      detallesModal.show();  // Muestra el modal con los detalles de la venta
    } else {
      console.error('No se encontró el elemento del modal');
    }
  }

  confirmarCancelacion(venta: any): void {
    const confirmacion = window.confirm(`¿Está seguro de que desea cancelar la venta con ID: ${venta.idVenta}?`);
    if (confirmacion) {
      this.cancelarVenta(venta.idVenta, venta.totalVenta);
    }
  }

  cancelarVenta(id: number, total: number): void {
    this.creditNotesService.cancelarVenta(id, total).subscribe({
      next: () => {
        alert('Venta cancelada exitosamente');

       // Llamar al endpoint para registrar la nota de crédito
       this.creditNotesService.registrarNotaCredito(id, 'DEVOLUCION EXITOSA').subscribe({
        next: () => {
          console.log('Nota de crédito registrada exitosamente');
        },
        error: (error) => {
          console.error('Error al registrar la nota de crédito:', error);
        }
      });



        this.obtenerVentas(); // Actualizar la lista de ventas
      },
      error: (error) => {
        console.error('Error al cancelar la venta:', error);
      }
    });
  }



}
