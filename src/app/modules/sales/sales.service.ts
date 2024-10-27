import { Injectable, inject } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private readonly ApiService = inject(ApiService);

  constructor() {}

  createVenta(ventaData: any): Observable<any> {
    return this.ApiService.postMethod('/venta', ventaData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error inesperado.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
