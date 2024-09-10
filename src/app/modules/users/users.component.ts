
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { UsersModel } from './users-model.model';

@Component({
  selector: 'users-app',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

    private readonly Router       = inject(Router);
    private readonly FormBuilder  = inject(FormBuilder);
    private readonly UsersService = inject(UsersService);

    data:any;
    users:UsersModel[]=[];

    constructor(){};

    ngOnInit(): void {
        this.getUsers();
    }

    loginForm = this.FormBuilder.group({
        codigo:   ["3181", Validators.required],
        usuario:  ['', Validators.required],
        password: ['', Validators.required]
    });

    getUsers(){
        this.UsersService.getUsers().subscribe(data=>{
            this.users = data as UsersModel[];
        })
    }

    goToLogin(){
        this.Router.navigate(['punto-de-venta/login'])
    }

}