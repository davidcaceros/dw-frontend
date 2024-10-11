import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service'; 


@Injectable({
    providedIn: 'root',
  })
  export class CrearUsuarioService {

    private readonly ApiService = inject(ApiService);


    getRoles(){
        return this.ApiService.getMethod('/roles')
    }

    crear(body:any){
        return this.ApiService.postMethod('/personas', body)
    }

    getUsers(){
        return this.ApiService.getMethod('/personas');
    }

  }