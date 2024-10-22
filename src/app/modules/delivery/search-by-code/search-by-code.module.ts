import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchByCodeRoutingModule } from './search-by-code-routing.module';
import { NavModule } from 'src/app/core/nav/nav.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, SearchByCodeRoutingModule, NavModule],
})
export class SearchByCodeModule {}
