
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service'; 
import { ApiService } from 'src/app/core/api.service'; 

@Component({
  selector: 'nav-app',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    constructor(private ApiService:ApiService){}

    ngOnInit(): void {
        
    }

    logOut(){
        this.ApiService.signOut()
    }

}