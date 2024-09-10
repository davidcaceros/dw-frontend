// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './4DLAB.Modules/login/login.component';
const routes: Routes = [
  {path:'',redirectTo:'punto-de-venta',pathMatch:'full'},
  {path:'punto-de-venta',loadChildren:()=>import('./modules/auth/login/login.module').then(m => m.LoginModule)},
  {path:'punto-de-venta',loadChildren:()=>import('./modules/auth/register/register.module').then(m => m.RegisterModule)},
  {path:'punto-de-venta',loadChildren:()=>import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'punto-de-venta',loadChildren:()=>import('./modules/users/users.module').then(m => m.UsersModule)},
  {path:'punto-de-venta',loadChildren:()=>import('./modules/products/products.module').then(m => m.ProductsModule)},
  // {path:'4dlab',loadChildren:()=>import('./4DLAB.Modules/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  // {path:'pre-ordenes',loadChildren:()=>import('./4DLAB.Modules/pre-orders/pre-orders.module').then(m=>m.PreOrdersModule)},
  // {path:'ordenes',loadChildren:()=>import('./4DLAB.Modules/orders/orders.module').then(m=>m.OrdersModule)},
  // {path:'4dlab',loadChildren:()=>import('./4DLAB.Modules/config/config.module').then(m=>m.ConfigModule)}
];

const routerConfig: ExtraOptions = {
  preloadingStrategy        : PreloadAllModules,
  scrollPositionRestoration : 'enabled',
  useHash                   : true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

