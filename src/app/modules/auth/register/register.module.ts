import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    RegisterRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class RegisterModule {}
