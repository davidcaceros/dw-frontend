import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { AutenticateGuard } from "src/app/core/authenticated.guard";
const routes: Routes = [
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
    { path: 'productos', component: ProductsComponent, canActivate:[AutenticateGuard] }
  ];
  
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
  })

export class ProductsRoutingModule {}