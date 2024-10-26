import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
// import { AutenticateGuard } from 'src/app/4DLAB.Core/guards/authenticated.guard';
import { CreditNoteRoutingModule } from './credit-notes-routing';
import { CreditNotesComponent } from './credit-notes.component';

import { NavModule } from 'src/app/core/nav/nav.module';


@NgModule({
  declarations: [
    CreditNotesComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    // RouterModule.forChild(preOrderRoutes)
    CreditNoteRoutingModule,
    NavModule

  ],
  providers: [],
  bootstrap: []
})
export class CreditNoteModule { }
