import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.scss']
})
export class ClientSettingsComponent {
  userSettingsForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.userSettingsForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required],
    });
  }

  onSubmit(){
    this.errorMessage = '';
    const formData = this.userSettingsForm.value;
    let warnings = '';

    if (!formData.celular || !/^\d+$/.test(formData.celular)) {
      warnings += 'El nuevo celular debe contener solo dígitos enteros.<br>';
    }

    if (!formData.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      warnings += 'La nueva dirección de correo electronico no es válida.<br>';
    }

    if (formData.contrasena.length < 6) {
      warnings += `La nueva contraseña no es valida <br>`;
    }

    if (formData.contrasena !== formData.confirmarContrasena) {
      warnings += 'La confirmación de la nueva contraseña no coincide.<br>';
    }

    this.errorMessage = warnings;

    if(!this.errorMessage){
      console.log('Nuevos ajustes validos: ', formData)
      //editar el json en el objeto que corresponde
    }
    
  }

}