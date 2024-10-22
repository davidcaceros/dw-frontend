import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.css'],
})
export class SearchByDateComponent {
  searchForm: FormGroup;
  entregas: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  errorMessage: string = '';
  noResultsMessageVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryService
  ) {
    this.searchForm = this.fb.group({
      startDate: [''],
      endDate: [''],
    });
  }

  buscarEntregas() {
    const { startDate, endDate } = this.searchForm.value;

    // Formatear las fechas al formato que el backend espera (YYYY-MM-DD)
    const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
    const formattedEndDate = new Date(endDate).toISOString().split('T')[0];

    this.deliveryService
      .getEntregasByDateRange(formattedStartDate, formattedEndDate)
      .subscribe(
        (data: any[]) => {
          this.entregas = data;
          this.totalItems = data.length;
          this.errorMessage = '';

          if (this.totalItems === 0) {
            this.noResultsMessageVisible = true;
            setTimeout(() => {
              this.noResultsMessageVisible = false;
            }, 3000);
          }
        },
        (error) => {
          this.errorMessage = 'Error al buscar entregas. Inténtalo de nuevo.';
          this.entregas = [];
        }
      );
  }

  limpiarFormulario() {
    this.searchForm.reset();
    this.entregas = [];
    this.totalItems = 0;
    this.noResultsMessageVisible = false;
  }

  get paginatedEntregas() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.entregas.slice(start, end);
  }
}
