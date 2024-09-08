import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {Observable, tap} from 'rxjs';
import { AuthService } from './auth.service'; 

@Injectable({
    providedIn: 'root'
})

export class AutenticateGuard implements CanActivate{
  
    constructor(private AuthService:AuthService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
        return this.AuthService.isLoggedIn$.pipe(tap((isLoggedIn)=>{
             if(!isLoggedIn){ this.router.navigate([''])}
        }));
        
    }
}