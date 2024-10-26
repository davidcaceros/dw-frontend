import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private readonly ApiService = inject(ApiService);

  private departamentosSubject = new BehaviorSubject<any[]>([]);
  departamentos$ = this.departamentosSubject.asObservable();

  private municipiosSubject = new BehaviorSubject<any[]>([]);
  municipios$ = this.municipiosSubject.asObservable();

  constructor() {}

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
}
