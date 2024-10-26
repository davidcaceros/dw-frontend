
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup, FormArray, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service'; 
import { ApiService } from 'src/app/core/api.service'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarUsuarioService } from './editar.service';


@Component({
  selector: 'dasboard-app',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarUsuarioComponent implements OnInit {

    editarPersona: FormGroup;

    constructor(
        private EditarUsuarioService:EditarUsuarioService,
        private dialogRef: MatDialogRef<EditarUsuarioComponent>,  // Inyecta MatDialogRef para cerrar el modal

        private FormBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any){
       // Inicializa el formulario con valores vacíos
        this.editarPersona = this.FormBuilder.group({
            idPersona:[this.data.idPersona],
            primerNombre: [this.data.primerNombre || '', Validators.required],
            primerApellido: [this.data.primerApellido || '', Validators.required],
            telefono: [this.data.telefono || '', Validators.required],
            direccion: [this.data.direccion || '', Validators.required],
            estado: [this.data.estado || '', Validators.required],
            categoria: [this.data.categoria || '', Validators.required]
        });
    }

    ngOnInit(): void {
        console.log(this.data.idPersona)
    }


    // Método para guardar los cambios y cerrar el diálogo
    onSave(): void {
        if (this.editarPersona.valid) {
          // Agregamos el idPersona si no está en el formulario
          const updatedData = { ...this.editarPersona.value, idPersona: this.data.idPersona };
      
          // Verifica que los datos son correctos antes de enviarlos
          console.log('Datos actualizados:', updatedData);
      
          // Llamada al servicio para actualizar
          this.EditarUsuarioService.editar(updatedData);
          this.dialogRef.close(updatedData); 
        } else {
          console.log('Formulario inválido');
        }
      }

  // Método para cancelar y cerrar el diálogo
  onCancel(): void {
    console.log('Edición cancelada');
  }
}