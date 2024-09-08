import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component"; 
import { AutenticateGuard } from 'src/app/core/authenticated.guard'; 

const routes: Routes = [
    { path: '', redirectTo: 'registro', pathMatch: 'full' },
    { path: 'registro', component: RegisterComponent }
  ];
  
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
  })

export class RegisterRoutingModule {}