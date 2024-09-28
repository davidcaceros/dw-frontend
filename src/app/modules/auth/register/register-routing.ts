import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { NoAuthenticatedGuard } from 'src/app/core/no-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  {
    path: 'registro',
    component: RegisterComponent,
    canActivate: [NoAuthenticatedGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [],
})
export class RegisterRoutingModule {}
