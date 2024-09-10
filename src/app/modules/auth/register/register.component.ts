
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service'; 
import { ApiService } from 'src/app/core/api.service'; 

@Component({
  selector: 'register-app',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

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
    codigo:   ["3181", Validators.required],
    usuario:  ['', Validators.required],
    password: ['', Validators.required]
  });

    data:any;
    user:any;
    token:any;

  loginUsuario(frmAuth: any){
    this.loginForm.disable();
    this.AuthService.signIn(frmAuth).subscribe((data)=>{
      this.data = data;
      this.user = this.data.result;
        if(!!data && this.user.usuario.vigente){
          this.AuthService.setLoggedUser(this.user.usuario);
          // this.Router.navigate(['/'+this.user.usuario.route]);    
           this.Router.navigate(['4dlab/dashboard']);    
        }
    },(error)=>{
      this.ApiService.showErrorMessage("ERROR! Contacte con el administrador.")
      this.loginForm.enable();
    });
  }

  goToLogin(){
    this.Router.navigate(['punto-de-venta/login'])
  }

}