import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreditNotesComponent } from "./credit-notes.component";
import { AutenticateGuard } from "src/app/core/authenticated.guard";
const routes: Routes = [
    { path: '', redirectTo: 'notas-de-credito', pathMatch: 'full' },
    { path: 'notas-de-credito', component: CreditNotesComponent, canActivate:[AutenticateGuard] }
  ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
  })

export class CreditNoteRoutingModule {}
