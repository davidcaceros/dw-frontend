import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
// import { AutenticateGuard } from 'src/app/4DLAB.Core/guards/authenticated.guard';
import { NavModule } from 'src/app/core/nav/nav.module';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    // RouterModule.forChild(preOrderRoutes)
    SalesRoutingModule,
    NavModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SalesModule {}
