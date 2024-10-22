import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from '../delivery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css'],
})
export class CreatePackageComponent implements OnInit {
  createPackageForm: FormGroup;
  departamentos: any[] = [];
  municipios: any[] = [];
  selectedDepartamento: number | null = null;
  ventaData: any = null;
  showModal: boolean = false;
  modalMessage: string = '';
  codigoEntrega: string = '';

  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryService,
    private router: Router
  ) {
    this.createPackageForm = this.fb.group({
      idVenta: ['', Validators.required],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadDepartamentos();
    this.deliveryService.departamentos$.subscribe((data) => {
      this.departamentos = data;
    });

    this.deliveryService.municipios$.subscribe((data) => {
      this.municipios = data;
    });
  }

  loadDepartamentos() {
    this.deliveryService.loadDepartamentos();
  }

  loadMunicipios() {
    if (this.selectedDepartamento) {
      this.deliveryService.loadMunicipios(this.selectedDepartamento);
    }
  }

  onDepartamentoChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDepartamento = +selectElement.value;
    this.loadMunicipios();
  }

  submit() {
    if (!this.createPackageForm.valid) {
      this.modalMessage = 'Por favor, complete todos los campos requeridos.';
      this.showModal = true;
      return;
    }

    const { idVenta } = this.createPackageForm.value;
    const departamentoId = this.selectedDepartamento;
    const municipioId = this.createPackageForm.value.municipio;

    if (!departamentoId || !municipioId) {
      this.modalMessage =
        'Por favor, seleccione un departamento y un municipio.';
      this.showModal = true;
      return;
    }

    this.deliveryService
      .createEntrega(departamentoId, municipioId, idVenta)
      .subscribe(
        (response: any) => {
          this.codigoEntrega = response.codigoEntrega;
          this.modalMessage = `Código de Entrega: ${response.codigoEntrega}`;
          this.showModal = true;
        },
        (error: any) => {
          console.error('Error creando el paquete', error);
          this.modalMessage =
            'Error: ' + (error.error.message || 'Ocurrió un error inesperado.');
          this.showModal = true;
        }
      );
  }

  closeModal() {
    this.showModal = false;
    this.createPackageForm.reset();
    this.ventaData = null;
  }

  generatePDF(idVenta: number) {
    this.deliveryService.generatePDF(idVenta).subscribe(
      (blob: Blob) => {
        const urlBlob = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = urlBlob;
        a.download = 'comprobante_entrega.pdf';
        a.click();
        window.URL.revokeObjectURL(urlBlob);
        this.createPackageForm.reset();
        this.ventaData = null;
      },
      (error: any) => {
        console.error('Error generando el PDF', error);
        this.modalMessage = error;
        this.showModal = true;
      }
    );
  }

  getVentaData() {
    const idVenta = this.createPackageForm.value.idVenta;
    if (idVenta) {
      this.deliveryService.getVentaById(idVenta).subscribe(
        (response: any) => {
          this.ventaData = response;
        },
        (error: any) => {
          console.error('Error al obtener los datos de la venta', error);
          this.modalMessage = error;
          this.showModal = true;
        }
      );
    }
  }
}
