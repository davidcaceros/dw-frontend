import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service'; 


@Injectable({
    providedIn: 'root',
  })
  export class UsersService {

    private readonly ApiService = inject(ApiService);

    getUsers(){
        return this.ApiService.getMethod('/users');
    }

  }