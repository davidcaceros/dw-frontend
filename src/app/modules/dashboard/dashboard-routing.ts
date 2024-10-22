import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AutenticateGuard } from 'src/app/core/authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AutenticateGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [],
})
export class DashboardRoutingModule {}
