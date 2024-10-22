import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchByDateRoutingModule } from './search-by-date-routing.module';
import { SearchByDateComponent } from './search-by-date.component';


@NgModule({
  declarations: [
    SearchByDateComponent
  ],
  imports: [
    CommonModule,
    SearchByDateRoutingModule
  ]
})
export class SearchByDateModule { }
