import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private baseUrl = `${environment.URLBase}`;
  private readonly ApiService = inject(ApiService);

  private departamentosSubject = new BehaviorSubject<any[]>([]);
  departamentos$ = this.departamentosSubject.asObservable();

  private municipiosSubject = new BehaviorSubject<any[]>([]);
  municipios$ = this.municipiosSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadDepartamentos() {
    return this.ApiService.getMethod('/departamentos').subscribe(
      (data: any) => {
        this.departamentosSubject.next(data);
      },
      (error) => {
        console.error('Error loading departamentos', error);
      }
    );
  }

  loadMunicipios(departamentoId: number) {
    return this.ApiService.getMethod(`/municipios/${departamentoId}`).subscribe(
      (data: any) => {
        this.municipiosSubject.next(data);
      },
      (error) => {
        console.error('Error loading municipios', error);
      }
    );
  }

  createEntrega(departamentoId: number, municipioId: number, idVenta: number) {
    const body = {
      idVenta: idVenta,
      estado: 'LISTO PARA ENVIO',
    };
    return this.ApiService.postMethod(
      `/entregas?idDepartamento=${departamentoId}&idMunicipio=${municipioId}`,
      body
    );
  }

  getVentaById(idVenta: number) {
    return this.ApiService.getMethod(`/entregas/venta/${idVenta}`);
  }

  generatePDF(idVenta: number): Observable<Blob> {
    const url = `${this.baseUrl}/pdf/${idVenta}`;
    return this.http
      .get(url, {
        responseType: 'blob',
        headers: { Accept: 'application/pdf' },
      })
      .pipe(catchError(this.handleError));
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

  getEntregaByCodigo(codigoEntrega: string) {
    const url = `${this.baseUrl}/entregas/codigo/${codigoEntrega}`;
    return this.http.get(url);
  }
  updateEstadoEntrega(id: number, estado: string) {
    const url = `${this.baseUrl}/entregas/${id}/estado`;
    return this.http.patch(url, { estado });
  }

  getEntregasByDateRange(
    startDate: string,
    endDate: string
  ): Observable<any[]> {
    const url = `${this.baseUrl}/entregas/rango-fechas?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<any[]>(url);
  }
}
