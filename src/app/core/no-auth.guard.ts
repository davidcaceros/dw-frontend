import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoAuthenticatedGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.AuthService.isLoggedIn$.pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          // Si el usuario está autenticado, redirigir a la página de inicio
          return this.router.createUrlTree(['punto-de-venta/dashboard']); // Reemplaza '/home' por la ruta a la que quieras redirigir
        }
        return true; // Permitir el acceso a la ruta de login si no está autenticado
      })
    );
  }
}
