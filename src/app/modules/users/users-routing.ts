import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { AutenticateGuard } from "src/app/core/authenticated.guard";
const routes: Routes = [
    { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
    { path: 'usuarios', component: UsersComponent, canActivate:[AutenticateGuard] }
  ];
  
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
  })

export class UsersRoutingModule {}