import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { RegisterModel } from 'src/app/core/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private readonly ApiService = inject(ApiService);
  showPassword: boolean = false;

  constructor(private Router: Router, private FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  registerForm = this.FormBuilder.group({
    primerNombre: ['', Validators.required],
    segundoNombre: [''],
    primerApellido: ['', Validators.required],
    segundoApellido: [''],
    apellidoCasada: [''],
    dpi: ['', Validators.required],
    nit: ['', Validators.required],
    pasaporte: [''],
    telefono: ['', Validators.required],
    correo: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ],
    ],
    direccion: ['', Validators.required],
    estado: ['', Validators.required],
    categoria: ['', Validators.required],
    idRol: [1, Validators.required],
    contrasena: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$'
        ),
      ],
    ],
  });

  // Método para alternar la visibilidad de la contraseña
  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const userRegister: RegisterModel = {
      primerNombre: this.registerForm.get('primerNombre')?.value || '',
      segundoNombre: this.registerForm.get('segundoNombre')?.value || '',
      primerApellido: this.registerForm.get('primerApellido')?.value || '',
      segundoApellido: this.registerForm.get('segundoApellido')?.value || '',
      apellidoCasada: this.registerForm.get('apellidoCasada')?.value || '',
      dpi: this.registerForm.get('dpi')?.value || '',
      nit: this.registerForm.get('nit')?.value || '',
      pasaporte: this.registerForm.get('pasaporte')?.value || '',
      telefono: this.registerForm.get('telefono')?.value || '',
      correo: this.registerForm.get('correo')?.value || '',
      direccion: this.registerForm.get('direccion')?.value || '',
      estado: this.registerForm.get('estado')?.value || '',
      categoria: this.registerForm.get('categoria')?.value || '',
      idRol: this.registerForm.get('idRol')?.value || 1,
      contrasena: this.registerForm.get('contrasena')?.value || '',
    };

    this.ApiService.register(userRegister).subscribe({
      next: () => {
        alert('Registro exitoso, por favor inicia sesión.');
        this.goToLogin();
      },
      error: (err: any) => {
        console.error('Error en el registro', err);
        if (err.status === 400) {
          alert(`Error: ${err.error.message}`);
        } else {
          alert('Error en el registro. Por favor, inténtelo de nuevo.');
        }
      },
    });
  }

  goToLogin(): void {
    this.Router.navigate(['punto-de-venta/login']);
  }
}
