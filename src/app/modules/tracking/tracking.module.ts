import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';

@NgModule({
  declarations: [TrackingComponent],
  imports: [CommonModule, FormsModule, TrackingRoutingModule],
})
export class TrackingModule {}
