import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment'; 
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoaderService } from './loader/loader-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient, /*private MatSnackBar: MatSnackBar,*/ private Router:Router, private LoaderService:LoaderService ) {}

  getMethod(endpoint: string, params?:any, errorMessage?:string){
      this.LoaderService.showLoader();
      let _params =  new HttpParams
      const url = `${environment.URLBase}${endpoint}`;
      return this.HttpClient.get(url, {params})
      .pipe(tap(response => {
          this.LoaderService.hideLoader();
          return response;
      }),
      catchError((error: HttpErrorResponse) => {
        if(error.status == 0){
          this.showErrorMessage("Conexión Denegada.");
          this.signOut();
        }
        if(error.ok == false){
          this.LoaderService.hideLoader();
          this.showErrorMessage(error.error.errors.msg);
        }
        console.log(error.status);
        return throwError(true);
      })
    );
  }

  postMethod(endpoint:string, data:any, params?:any, errorMessage?:string): Observable<any> {
    const url = `${environment.URLBase}${endpoint}`;
    this.LoaderService.showLoader();
    return this.HttpClient.post(url, data, {params})
    .pipe(tap(response => {
      this.LoaderService.hideLoader();
    }),
      catchError((error: HttpErrorResponse) => {
        this.LoaderService.hideLoader();
        if(error.status == 0){
          this.showErrorMessage("Conexión Denegada.");
          this.signOut();
        }
        if(error.ok == false){
          this.showErrorMessage(error.statusText);
        }
        console.log(error);
        return throwError(true);
      })
    );
  }

  putMethod(endpoint:string, data:any, params?:any, errorMessage?:string): Observable<any> {
    const url = `${environment.URLBase}${endpoint}`;
    return this.HttpClient.put(url, data, {params})
    .pipe(tap(response => {
      this.showSuccessMessage('Operación realizada correctamente.')
    }),
      catchError((error: HttpErrorResponse) => {
          let _message  = this.build_error_message(error, errorMessage)
          this.showErrorMessage(_message)
          return throwError(_message)
      })
    );
  }

  build_error_message(error: HttpErrorResponse, message?:string){
    let server_error_response = (error.error) ? error.error.msg : error.message;
    // return this.UtilService.openErrorMessage(`Error ${error.status} - ${error.error}` )
    return `Error ${error.status} - ${error.error}` ;
  }

  showErrorMessage(message:string){
    // return this.MatSnackBar.open( message,'',
    //   {
    //     duration: 4000,
    //     verticalPosition: 'top',
    //     panelClass: ['error-snackbar','text-white']
    //   }
    // )

  }

  showSuccessMessage(message: string){
    // return this.MatSnackBar.open(
    //     message,
    //     '',
    //     {
    //       duration: 4000,
    //       verticalPosition: 'top',
    //       panelClass: ['bg-sky-400/70', 'text-white']
    //     },

    // )

  }

  signOut(){
    // Remove token from the local storage
    console.log("you click on log out ")
    localStorage.clear();
    this.Router.navigate(['']);
  }

  //DNA REQUEST
  getMethodDNA(endpoint: string, params?:any, errorMessage?:string){
    this.LoaderService.showDNALoader();
    let _params =  new HttpParams
    const url = `${environment.URLBase}${endpoint}`;
    return this.HttpClient.get(url, {params})
    .pipe(tap(response => {
        this.LoaderService.hideDNALoader();
        return response;
    }),
    catchError((error: HttpErrorResponse) => {
      if(error.status == 0){
        this.LoaderService.hideDNALoader();
        this.showErrorMessage("Conexión Denegada.");
        this.signOut();
      }
      console.log(error.status);
      return throwError(true);
    })
  );
  }

  postMethodDNA(endpoint:string, data:any, params?:any, errorMessage?:string): Observable<any> {
    const url = `${environment.URLBase}${endpoint}`;
    this.LoaderService.showDNALoader();
    return this.HttpClient.post(url, data, {params})
    .pipe(tap(response => {
        this.LoaderService.hideDNALoader();
    }),
      catchError((error: HttpErrorResponse) => {
        this.LoaderService.hideDNALoader();
        if(error.status == 0){
          this.LoaderService.hideDNALoader();
          this.showErrorMessage("Conexión Denegada.");
          this.signOut();
        }
        if(error.ok == false){
          this.showErrorMessage(error.error.msg);
        }
        return throwError(true);
      })
    );
  }


}