
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';
import { ProductsModel } from './products-model';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from './new-product/new-product.component';

// const nuevoProducto: ProductsModel[] = {};

@Component({
  selector: 'users-app',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  clearPassword=false;
  login$: any;
  loader:boolean = false;
  products:any;
  data:any;

  constructor(
    private Router:Router, 
    private FormBuilder: FormBuilder, 
    private ProductsService:ProductsService
  ){
    
  };

  ngOnInit(): void {
    this.ProductsService.productsList$.subscribe((products) => {
      console.log("lista de productos")
      console.log(products)
      this.products = products;
    });
}

  

  

    getProducts(){
      this.ProductsService.getProducts().subscribe(data=>{
        console.log(data);
        this.products = data;
      });
    }

  readonly MatDialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.MatDialog.open(NewProductComponent,{
      width:'50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ProductsService.productsList$.subscribe((products) => {
        console.log(products)
        this.products = products;
      });
    });
  }

      // Actualizar el método createProducts para enviar los datos del formulario


  goToLogin(){
    this.Router.navigate(['punto-de-venta/login'])
  }

}