import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchByDateRoutingModule } from './search-by-date-routing.module';
import { NavModule } from 'src/app/core/nav/nav.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SearchByDateRoutingModule, NavModule],
})
export class SearchByDateModule {}
