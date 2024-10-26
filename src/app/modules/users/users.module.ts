import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EditarUsuarioComponent } from './editar/editar.component';
import { MatInputModule } from '@angular/material/input';
import { CrearUsuarioComponent } from './crear/crear.component';
import { UsersRoutingModule } from './users-routing';
import { UsersComponent } from './users.component';  
import { NavModule } from 'src/app/core/nav/nav.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    UsersComponent,
    EditarUsuarioComponent,
    CrearUsuarioComponent
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
    // RouterModule.forChild(preOrderRoutes)
    UsersRoutingModule,
    NavModule

  ],
  providers: [],
  bootstrap: []
})
export class UsersModule { }