import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'sales-app',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  private readonly Router = inject(Router);

  ngOnInit(): void {}

  goToUsers() {
    this.Router.navigate(['punto-de-venta/usuarios']);
  }
  goToProducts() {
    this.Router.navigate(['punto-de-venta/productos']);
  }
  goToSales() {
    this.Router.navigate(['punto-de-venta/ventas']);
  }
  goToCreditNotes() {
    this.Router.navigate(['punto-de-venta/notas-de-credito']);
  }
  goToPackage() {
    this.Router.navigate(['punto-de-venta/paquetes']);
  }
}
