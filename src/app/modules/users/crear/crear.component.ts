
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup, FormArray, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service'; 
import { ApiService } from 'src/app/core/api.service'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrearUsuarioService } from './crear.service'; 


@Component({
  selector: 'crear-app',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearUsuarioComponent implements OnInit {

    crearPersona: FormGroup;
    roles:any;

    constructor(private FormBuilder:FormBuilder, private CrearUsuarioService:CrearUsuarioService){

        // Inicializa el formulario con valores vacíos
        this.crearPersona = this.FormBuilder.group({
            primerNombre: ['', Validators.required],
            segundoNombre: ['', Validators.required],
            primerApellido: [ '', Validators.required],
            segundoApellido: [ '', Validators.required],
            dpi:[ '', Validators.required],
            nit:[ '', Validators.required],
            pasaporte:[''],
            telefono: [ '', Validators.required],
            correo:[ ''],
            direccion: [ '', Validators.required],
            estado: ['', Validators.required],
            idRol:[ 0, Validators.required],
            categoria: [ '', Validators.required]
        });

        this.getRoles();

    }

    ngOnInit(): void {
        
    }


    onSave(){
        console.log(this.crearPersona.value);

        if (this.crearPersona.valid) {
            this.CrearUsuarioService.crear(this.crearPersona.value).subscribe(data=>{
                console.log(data)
                this.getpersonas()
            })
        }
    }

    getpersonas(){
       this.CrearUsuarioService.getUsers().subscribe()
    }

    getRoles(){
        this.CrearUsuarioService.getRoles().subscribe(data=>{
            this.roles = data;
            console.log(this.roles)
        })
    }

    // Método para cancelar y cerrar el diálogo
  onCancel(): void {
    console.log('Edición cancelada');
  }


}