import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent {
  constructor(private router: Router) {}

  goToCreatePackage() {
    this.router.navigate(['punto-de-venta/entrega-paquetes/crear']);
  }

  goToSearchByCode() {
    this.router.navigate(['punto-de-venta/entrega-paquetes/buscar-codigo']);
  }

  goToSearchByDateRange() {
    this.router.navigate(['punto-de-venta/entrega-paquetes/buscar-fecha']);
  }
}
