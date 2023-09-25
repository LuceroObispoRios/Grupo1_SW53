import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent {
  companySettingsForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {//private http: HttpClient
    this.companySettingsForm = this.fb.group({
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

  onSubmit(){
    this.errorMessage = '';
    const formData = this.companySettingsForm.value;
    let warnings = "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      warnings += `La nueva dirección de correo electronico no es válida.<br>`;
    }

    if (!/^\d+$/.test(formData.contactNumber)) {
      warnings += `El numero de contacto nuevo no es valido <br>`;
    }

    if (formData.contrasena.length < 6) {
      warnings += `La nueva contraseña no es valida <br>`;
    }

    if (formData.contrasena !== formData.contrasena2) {
      warnings += `No se confirmo la nueva contraseña correctamente <br>`;
    }

    // Handle checkbox validation
    const services = [];
    const checkboxes = [
      'transporte', 'carga', 'embalaje', 'montaje', 'desmontaje'
    ];

    checkboxes.forEach(checkboxName => {
      const control = this.companySettingsForm.get(checkboxName);
      if (control && control.value) {
        services.push(checkboxName);
      }
    });

    if (services.length === 0) {
      warnings += 'Seleccione al menos un servicio <br>';
    }

    if (!formData.description || formData.description.length < 4) {
      warnings += `La descripcion es muy corta <br>`;
    }

    this.errorMessage = warnings;

    if(!this.errorMessage){
      console.log('Nuevos ajustes validos: ', formData)
      //editar el json en el objeto que corresponde
    }

  }

}