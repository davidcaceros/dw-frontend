import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { AutenticateGuard } from 'src/app/core/authenticated.guard';
const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  {
    path: 'ventas',
    component: SalesComponent,
    canActivate: [AutenticateGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [],
})
export class SalesRoutingModule {}
