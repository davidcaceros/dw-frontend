import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from '../delivery.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

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

  getVentaData() {
    const idVenta = this.createPackageForm.value.idVenta;
    if (idVenta) {
      this.deliveryService.getVentaById(idVenta).subscribe(
        (response: any) => {
          this.ventaData = response;
        },
        (error) => {
          console.error('Error al obtener los datos de la venta', error);
        }
      );
    }
  }

  submit() {
    if (this.createPackageForm.valid) {
      const { idVenta } = this.createPackageForm.value;
      const departamentoId = this.selectedDepartamento;
      const municipioId = this.createPackageForm.value.municipio;

      this.deliveryService
        .createEntrega(departamentoId!, municipioId, idVenta)
        .subscribe(
          (response: any) => {
            this.codigoEntrega = response.codigoEntrega;
            this.modalMessage = `Código de Entrega: ${response.codigoEntrega}`;
            this.showModal = true;
            console.log(this.showModal);
            this.createPackageForm.reset();
            this.ventaData = null;
          },
          (error) => {
            console.error('Error creando el paquete', error);
            this.modalMessage =
              'Error: ' +
              (error.error.message || 'Ocurrió un error inesperado.');
            this.showModal = true;
          }
        );
    }
  }

  closeModal() {
    this.showModal = false;
    this.createPackageForm.reset();
    this.ventaData = null;
  }

  generatePDF() {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(
      'Comprobante de Entrega',
      doc.internal.pageSize.getWidth() / 2,
      20,
      { align: 'center' }
    );

    doc.setFontSize(12);
    doc.text(
      `Código de Entrega: ${this.codigoEntrega}`,
      doc.internal.pageSize.getWidth() - 10,
      30,
      {
        align: 'right',
      }
    );

    if (this.ventaData) {
      const { cliente, detalleVenta } = this.ventaData;

      doc.text('Datos del Cliente:', 10, 50);
      doc.text(
        `Nombre: ${cliente.primerNombre} ${cliente.primerApellido}`,
        10,
        60
      );
      doc.text(`NIT: ${cliente.nit}`, 10, 70);
      doc.text(`Teléfono: ${cliente.telefono}`, 10, 80);
      doc.text(`Dirección: ${cliente.direccion}`, 10, 90);

      (doc as any).autoTable({
        startY: 100,
        head: [['Producto', 'Descripción', 'Cantidad', 'Precio']],
        body: detalleVenta.map((producto: any) => [
          producto.nombre,
          producto.descripcion,
          producto.cantidad,
          `Q${producto.precio}`,
        ]),
      });
    }

    doc.save('comprobante_entrega.pdf');
  }
}
