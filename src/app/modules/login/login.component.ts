
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service'; 
import { ApiService } from 'src/app/core/api.service'; 

@Component({
  selector: 'fourdlab-login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  clearPassword=false;
  login$: any;
  loader:boolean = false;
  constructor(
    private Router:Router, 
    private FormBuilder: FormBuilder, 
    private AuthService:AuthService,
    private ApiService: ApiService
    ){};

  ngOnInit(): void {localStorage.clear()}

  loginForm = this.FormBuilder.group({
    usuario:  ['admin@ventas.com', Validators.required],
    contrasena: ['123456789', Validators.required]
  });

    data:any;
    user:any;
    token:any;

  loginUsuario(frmAuth: any){
    this.loginForm.disable();
    this.AuthService.signIn(frmAuth).subscribe((data)=>{
        this.data = data;
        console.log(this.data)
        this.user = this.data.result;
    
        this.Router.navigate(['punto-de-venta/dashboard']); 
        // if(!!data && this.user.usuario.vigente){
        //   this.AuthService.setLoggedUser(this.user.usuario);
        //   // this.Router.navigate(['/'+this.user.usuario.route]);    
        //    this.Router.navigate(['4dlab/dashboard']);    
        // }
    },(error)=>{
      this.ApiService.showErrorMessage("ERROR! Contacte con el administrador.")
      this.loginForm.enable();
    });
  }

}