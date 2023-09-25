import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})

export class CompanyFormComponent {
  companyRegistrationForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {//private http: HttpClient
    this.companyRegistrationForm = this.fb.group({
      companyName: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      numeroContacto: ['', Validators.pattern(/^\d+$/)],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required],
      transporte: [false],
      carga: [false],
      embalaje: [false],
      montaje: [false],
      desmontaje: [false],
      description: ['']
    });
  }

  onSubmit() {
    this.errorMessage = '';
    const formData = this.companyRegistrationForm.value;
    let warnings = "";

    if (formData.companyName.length < 1) {
      warnings += `El nombre no es valido <br>`;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      warnings += `El email no es valido <br>`;
    }

    if (formData.direccion.length < 1) {
      warnings += `La ubicacion no es valida <br>`;
    }

    if (!/^\d+$/.test(formData.numeroContacto)) {
      warnings += `El numero de contacto no es valido <br>`;
    }

    if (formData.contrasena.length < 6) {
      warnings += `La contraseña no es valida <br>`;
    }

    if (formData.contrasena !== formData.confirmarContrasena) {
      warnings += `No se confirmo la contraseña correctamente <br>`;
    }

    // Handle checkbox validation
    const services = [];
    const checkboxes = [
      'transporte', 'carga', 'embalaje', 'montaje', 'desmontaje'
    ];

    checkboxes.forEach(checkboxName => {
      const control = this.companyRegistrationForm.get(checkboxName);
      if (control && control.value) {
        services.push(checkboxName);
      }
      
    });

    if (services.length === 0) {
      warnings += 'Seleccione al menos un servicio <br>';
      
    }

    if (!formData.description || formData.description.length < 1) {
      warnings += `La descripcion no es valida <br>`;
      
    }

    this.errorMessage = warnings; // Update the error message with the current errors

    //si no hay errores, Subir la data de usuario nuevo a JSON
  }
}