import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePackageComponent } from './create-package.component';

const routes: Routes = [{ path: '', component: CreatePackageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePackageRoutingModule { }
