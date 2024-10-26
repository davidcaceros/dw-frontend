import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchByCodeRoutingModule } from './search-by-code-routing.module';
import { SearchByCodeComponent } from './search-by-code.component';


@NgModule({
  declarations: [
    SearchByCodeComponent
  ],
  imports: [
    CommonModule,
    SearchByCodeRoutingModule
  ]
})
export class SearchByCodeModule { }
