import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByCodeComponent } from './search-by-code.component';

const routes: Routes = [{ path: '', component: SearchByCodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchByCodeRoutingModule { }
