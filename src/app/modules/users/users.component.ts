
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { UsersModel } from './users-model.model';
import { EditarUsuarioComponent } from './editar/editar.component';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuarioComponent } from './crear/crear.component';

@Component({
  selector: 'users-app',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

    private readonly Router       = inject(Router);
    private readonly FormBuilder  = inject(FormBuilder);
    private readonly UsersService = inject(UsersService);
    readonly dialog = inject(MatDialog);

    data:any;
    personas:UsersModel[]=[];
    persona:any;
    constructor(){};

    ngOnInit(): void {
        this.getUsers();
    }

 

    getUsers(){
        this.UsersService.getUsers().subscribe(data=>{
            this.persona = data ;
            console.log(data)
        })
    }

    goToLogin(){
        this.Router.navigate(['punto-de-venta/login'])
    }


    crear(){
 
        const dialogRef = this.dialog.open(CrearUsuarioComponent);
      
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result !== undefined) {
            //   this.animal.set(result);
            console.log(result);
            this.getUsers();
            }
          });
    }

   

    // eliminar(persona:any){
        
    //     this.UsersService.eliminar(persona).subscribe((data:any)=>{})
    // }

    editar(persona:any){
        console.log(persona);

        console.log(persona);
        const dialogRef = this.dialog.open(EditarUsuarioComponent, {
            data: persona,
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result !== undefined) {
            //   this.animal.set(result);
            console.log(result);
            this.getUsers();
            }
          });
    }




// Llamada a la función `editar` desde el servicio de edición
// editarPersona(persona: any) {
//     this.EditarUsuarioService.editar(persona).subscribe({
//         next: (response) => {
//             console.log('Usuario actualizado con éxito:', response);
//             this.getUsers();  // Refresca la lista de usuarios
//         },
//         error: (error) => {
//             console.error('Error al actualizar usuario:', error);
//         }
//     });
// }





}