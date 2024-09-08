import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/enviroments/enviroment'; 

import { BehaviorSubject, Observable, of , firstValueFrom, lastValueFrom, tap, Subject, ReplaySubject } from 'rxjs';
import { UserModel } from './models/user.model'; 
import { LoginModel } from './models/login.model';
import { UsuarioLogueado } from './models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {


  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _currentUser$ = new BehaviorSubject<LoginModel[]>([]);
  currentUser$ = this._currentUser$.asObservable();

  private readonly TOKEN_NAME = environment.AUTH_KEY;
  private userLogged?: any;

  constructor(private ApiService:ApiService, private Router:Router)
  {
    this._isLoggedIn$.next(!!this.token);
  }

  get accessToken(): string{
    return localStorage.getItem(this.TOKEN_NAME) ?? '';
  }
  get token(){
    return localStorage.getItem(this.TOKEN_NAME);
  }

  set currentUserName(user: string){
      localStorage.setItem('currentUser', user);
  }
  set currentUser(user: LoginModel){
    localStorage.setItem('currentUser', JSON.stringify(user) );
  }



  setLoggedUser(user?: UserModel){
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(this.userLogged) );
  }

  getLoggedUser()
{
    return localStorage.getItem('currentUser') ?? '';
  }

  getCurrentUser(){
    let user = JSON.parse(localStorage.getItem('currentUser')?? '');
    // console.log(user);
    return user;
  }

  signIn(user: any){
    return this.ApiService.postMethodDNA("/auth/login", user,{},"error")
    .pipe(tap((response) => {
        console.log(response)
        this.currentUserName = JSON.stringify(response.usuario);
        this.currentUser$ = response.usuario;
        localStorage.setItem(this.TOKEN_NAME, response.token);
        localStorage.setItem('currentUser', response.usuario);
        // this._currentUser$.next(response)
        this._isLoggedIn$.next(true);
      })
    );
  }

  signOut(){
    // Remove token from the local storage
    localStorage.clear();
    this._isLoggedIn$.next(false);
    this.Router.navigate(['']);
  }
}