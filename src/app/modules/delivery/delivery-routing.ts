import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { AutenticateGuard } from 'src/app/core/authenticated.guard';
import { CreatePackageComponent } from './create-package/create-package.component';
import { SearchByCodeComponent } from './search-by-code/search-by-code.component';
import { SearchByDateComponent } from './search-by-date/search-by-date.component';

const routes: Routes = [
  {
    path: 'entrega-paquetes',
    component: DeliveryComponent,
    canActivate: [AutenticateGuard],
  },
  {
    path: 'entrega-paquetes/crear',
    component: CreatePackageComponent,
    canActivate: [AutenticateGuard],
  },
  {
    path: 'entrega-paquetes/buscar-codigo',
    component: SearchByCodeComponent,
    canActivate: [AutenticateGuard],
  },
  {
    path: 'entrega-paquetes/buscar-fecha',
    component: SearchByDateComponent,
    canActivate: [AutenticateGuard],
  },
  { path: '', redirectTo: 'entrega-paquetes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
