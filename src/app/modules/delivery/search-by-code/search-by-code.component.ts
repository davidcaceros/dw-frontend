import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-search-by-code',
  templateUrl: './search-by-code.component.html',
  styleUrls: ['./search-by-code.component.css'],
})
export class SearchByCodeComponent implements OnInit {
  searchForm: FormGroup;
  entregaData: any = null;
  errorMessage: string = '';
  successMessage: string = '';
  estados = [
    'LISTO PARA ENVIO',
    'EN CAMINO/TRANSITO',
    'ENTREGADO',
    'RETORNAO',
    'CANCELADO',
  ];
  estadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryService
  ) {
    this.searchForm = this.fb.group({
      codigoEntrega: ['', Validators.required],
    });

    this.estadoForm = this.fb.group({
      estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  buscarEntrega() {
    this.successMessage = '';
    this.errorMessage = '';
    if (this.searchForm.valid) {
      const codigo = this.searchForm.value.codigoEntrega;
      this.deliveryService.getEntregaByCodigo(codigo).subscribe(
        (response) => {
          this.entregaData = response;
          this.errorMessage = '';
          this.filtrarEstados(this.entregaData.estado);
        },
        (error) => {
          this.entregaData = null;
          this.errorMessage = 'Entrega no encontrada o código inválido.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, ingrese un código de entrega válido.';
    }
  }

  filtrarEstados(estadoActual: string) {
    this.estados = this.estados.filter((estado) => estado !== estadoActual);
  }

  cambiarEstado() {
    if (this.estadoForm.valid && this.entregaData) {
      const nuevoEstado = this.estadoForm.value.estado;
      const id = this.entregaData.idBitacora;
      this.deliveryService.updateEstadoEntrega(id, nuevoEstado).subscribe(
        (response) => {
          this.entregaData = null;
          this.estadoForm.reset();
          this.searchForm.reset();
          this.successMessage = 'El estado se cambió exitosamente.';

          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        (error) => {
          this.errorMessage = 'Error al actualizar el estado.';
        }
      );
    }
  }

  limpiarFormulario() {
    this.entregaData = null;
    this.searchForm.reset();
    this.estadoForm.reset();
    this.errorMessage = '';
    this.successMessage = '';
  }
}
