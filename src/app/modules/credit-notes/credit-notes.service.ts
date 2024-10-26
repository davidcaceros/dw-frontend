import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class CreditNotesService {

  private apiUrlVentAll = environment.URLBase+'/venta'; // URL del API
  private apiUrlNotaCredito = environment.URLBase+'/notacredito/register'; // URL del API para notas de crédito
  constructor(private http: HttpClient) {}

  getVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlVentAll); // Devuelve un observable con la lista de ventas
  }


  cancelarVenta(id: number, total: number): Observable<any> {
    const url = `${this.apiUrlVentAll}/${id}`;
    const body = {
      estado: 'CANCELADO',
      devolucion: true,
      saldoFavor: total
    };
    return this.http.put(url, body);
  }
  registrarNotaCredito(idVenta: number, descripcion: string): Observable<any> {
    const body = {
      idventa: idVenta.toString(),
      descripcion: descripcion
    };
    return this.http.post(this.apiUrlNotaCredito, body);
  }
}
