import { inject, Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service'; 
import { ProductsModel } from './products-model';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ProductsService {

  private readonly ApiService = inject(ApiService);

  // BehaviorSubject para almacenar y emitir la lista de productos
  // private productsSubject = new BehaviorSubject<ProductsModel[]>([]);
  // products$ = this.productsSubject.asObservable();

  private productsSubject = new BehaviorSubject<any>([]);
  productsList$ = this.productsSubject.asObservable()
  .pipe(switchMap(() => this.getProducts()) ); 

    getProducts(){
        return this.ApiService.getMethod('/productos');
    }

    createProducts(product: ProductsModel){
      return this.ApiService.postMethod('/productos',product);
    }


    // constructor() {}
  
   
    // getProducts(): Observable<any> {
    //   return this.ApiService.getMethod('/productos');
    // }
  
    // private refreshProductsList() {
    //   this.getProducts().subscribe(data => {
    //     console.log(data)
    //     this.productsSubject.next(data); 
    //   });
    // }

    // createProducts(product: ProductsModel): Observable<any> {
    //   return this.ApiService.postMethod('/productos', product).pipe(
    //     tap(() => this.getProducts() ));
    // }

  }