import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { DeliveryComponent } from './delivery.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { SearchByCodeComponent } from './search-by-code/search-by-code.component';
import { SearchByDateComponent } from './search-by-date/search-by-date.component';
import { DeliveryRoutingModule } from './delivery-routing';
import { NavModule } from 'src/app/core/nav/nav.module';

@NgModule({
  declarations: [
    DeliveryComponent,
    CreatePackageComponent,
    SearchByDateComponent,
    SearchByCodeComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    DeliveryRoutingModule,
    NavModule,
  ],
  providers: [],
  bootstrap: [],
})
export class DeliveryModule {}
