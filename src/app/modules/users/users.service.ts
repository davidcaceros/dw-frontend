import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service'; 


@Injectable({
    providedIn: 'root',
  })
  export class UsersService {

    private readonly ApiService = inject(ApiService);

    getUsers(){
        return this.ApiService.getMethod('/personas');
    }



    eliminar(body: any){

      let payload={
       estado: "INACTIVO"
      }


       if (body.idPersona) {  // Asegúrate de que body tiene el id de la persona
           console.log(body);  // Para verificar que los datos son correctos
           console.log(body.idPersona);  // Verifica que el idPersona está presente
       
           // Llamada al método `putMethod`
           this.ApiService.putMethod('/personas/' + payload, body).subscribe({
             next: (response) => {
               console.log('Actualización exitosa:', response);
             },
             error: (error) => {
               console.error('Error al actualizar:', error);
             }
           });
         } else {
           console.error('El body no contiene un idPersona válido.');
         }
     }
  }