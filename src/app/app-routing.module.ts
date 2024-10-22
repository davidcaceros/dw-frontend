// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
// import { LoginComponent } from './4DLAB.Modules/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: 'punto-de-venta', pathMatch: 'full' },
  {
    path: 'punto-de-venta',
    loadChildren: () =>
      import('./modules/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'punto-de-venta',
    loadChildren: () =>
      import('./modules/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'punto-de-venta',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'punto-de-venta',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'punto-de-venta',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'punto-de-venta',
    loadChildren: () =>
      import('./modules/sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: 'punto-de-venta',
    loadChildren: () =>
      import('./modules/delivery/delivery.module').then(
        (m) => m.DeliveryModule
      ),
  },
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
