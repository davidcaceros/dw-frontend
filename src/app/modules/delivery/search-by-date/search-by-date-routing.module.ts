import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByDateComponent } from './search-by-date.component';

const routes: Routes = [{ path: '', component: SearchByDateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchByDateRoutingModule { }
