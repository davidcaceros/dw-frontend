import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsModel } from '../products-model';

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'new-product.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProductComponent {

    private readonly ProductsService = inject(ProductsService);
    private readonly FormBuilder = inject(FormBuilder);
    // Definir el formulario de producto
    productForm: FormGroup;

    constructor(){
        this.productForm = this.FormBuilder.group({
            nombre:           ['', Validators.required],
            descripcion:      ['', Validators.required],
            ubicacionFisica:  ['', Validators.required],
            existenciaMinima: [0, [Validators.required, Validators.min(1)]],
            codigoProveedor:  [0, Validators.required],
            fechaVencimiento: ['', Validators.required]
        });
    }
    // Inicializar con un objeto vacío o con valores predeterminados
    nuevoProducto: ProductsModel = {
        nombre: '',
        descripcion: '',
        ubicacionFisica: '',
        existenciaMinima: 0,
        codigoProveedor: 0,
        fechaVencimiento: new Date()
    };

    createProducts() {
        if (this.productForm.valid) {
          this.nuevoProducto = this.productForm.value; // Asignar los valores del formulario al objeto `nuevoProducto`
          this.ProductsService.createProducts(this.nuevoProducto).subscribe(data => {
            console.log('Producto creado:', data);
    
          }, error => {
            console.error('Error al crear el producto:', error);
          });
        } else {
          console.error('Formulario no válido');
        }
    }

  }