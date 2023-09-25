import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})

export class ClientFormComponent {
  clientRegistrationForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) { //private http: HttpClient
    this.clientRegistrationForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{12,}$/)]],
      confirmarContrasena: ['', Validators.required],
    });
  }

  onSubmit() {
    this.errorMessage = '';
    const formData = this.clientRegistrationForm.value;
    let warnings = '';
    
    if (!formData.nombre || !formData.apellidoMaterno || !formData.apellidoPaterno || !formData.celular || !formData.direccion || !formData.correo || !formData.contrasena || !formData.confirmarContrasena) {
      warnings += 'Todos los campos son obligatorios. <br>';
    }

    if (!formData.celular || !/^\d+$/.test(formData.celular)) {
      warnings += 'El celular debe contener solo dígitos enteros.<br>';
    }

    if (!formData.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      warnings += 'El correo electrónico no es válido.<br>';
    }

    if (!formData.contrasena || !/^(?=.*[A-Z])(?=.*\d).{12,}$/.test(formData.contrasena)) {
      warnings += 'La contraseña debe tener al menos una letra en mayúscula, 12 caracteres y al menos 2 números.<br>';
    }

    if (formData.contrasena !== formData.confirmarContrasena) {
      warnings += 'Las contraseñas no coinciden.<br>';
    }

    this.errorMessage = warnings;

    /*if (!this.errorMessage) { //pasar info del nuevo usuario a JSON*/
  }
}