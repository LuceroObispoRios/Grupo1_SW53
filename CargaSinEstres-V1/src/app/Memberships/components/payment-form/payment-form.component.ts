import { Component, Input } from '@angular/core';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { Company } from 'src/app/models/company.model';
import { Subscription } from 'src/app/models/subscription.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {

  constructor(private dataService: CargaSinEstresDataService, private fb: FormBuilder ,private route: ActivatedRoute) {
    this.subscriptionForm = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
      ruc: ['', Validators.required],
      direccion: ['', Validators.required],
      vigenciaSuscripcion: ['', Validators.required],
      numeroTarjeta: ['', Validators.required],
      CVV: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
    });

    // Obtiene el id del usuario
    this.route.pathFromRoot[1].url.subscribe(
      url => {
        this.userId = url[1].path;
        console.log('User id:' + this.userId);
      }
    ); 
  }

  //para obtener el id del usuario
  userId: string = '';

  //heredan los datos de un parent
  @Input() companyId: any; 
  @Input() companyName: any; 
  @Input() companyLogo: any; 

  subscriptionForm: FormGroup;

  correo: string = '';
  contrasenia: string = '';
  ruc: string = '';
  direccion: string = '';
  vigenciaSuscripcion: string = '';
  numeroTarjeta: string = '';
  CVV: string = '';
  fechaVencimiento: string = '';

  //para mostrar el mensaje de confirmacion
  confirmacionVisible: boolean = false;
  //para desactivar el boton de confirmacion (no hacer spam de subscripciones)
  botonDesactivado: boolean = true;

  //incializar la firma aleatoria
  firma: string = this.generarCodigoAleatorio();

  onSubmit() {
      this.confirmacionVisible = true;
      //this.botonDesactivado = true;
      this.ruc = this.subscriptionForm.value.ruc;
      this.direccion = this.subscriptionForm.value.direccion;
      this.vigenciaSuscripcion = this.subscriptionForm.value.vigenciaSuscripcion;
      this.numeroTarjeta = this.subscriptionForm.value.numeroTarjeta;
      this.correo = this.subscriptionForm.value.correo;
      

      // Obtener la información de la empresa
      this.dataService.getCompanyById(this.userId).subscribe(
        (companyResponse: any) => {
            
            const nuevaSuscripcion: any = {
              firma: this.firma,
              subscriptionType: this.subscriptionForm.value.vigenciaSuscripcion,
              paymentMethod: this.subscriptionForm.value.numeroTarjeta,
            };
            console.log("nuevaSuscripcion: " + nuevaSuscripcion + "id de cliente: "+ companyResponse.id);
            
          // Crear la suscripción
          this.dataService.createSubscription(companyResponse.id ,nuevaSuscripcion).subscribe(
            (response) => {
              console.log('Suscripción creada con éxito', response);
            },
            (error) => {
              console.error('Error al crear la suscripción', error);
            }
          );
        },
        (error) => {
          console.error('Error al obtener la información de la empresa', error);
        }
      );
  }
  
  generarCodigoAleatorio(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    const longitudCodigo = 6;

    for (let i = 0; i < longitudCodigo; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }

    return codigo;
  }

  firmar() {
    this.firma = this.generarCodigoAleatorio();
  }


  descargarBoleta() {
    const contenidoBoleta = this.generarContenidoBoleta();
    
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenidoBoleta));
    enlaceDescarga.setAttribute('download', 'boleta.txt');
    
    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
  }

  generarContenidoBoleta(): string {
    const contenido = `
    Información de la Boleta:

    Correo: ${this.correo}
    contrasenia: ${this.contrasenia}
    RUC: ${this.ruc}
    Dirección: ${this.direccion}
    Vigencia de Suscripción: ${this.vigenciaSuscripcion}
    Numero de Tarjeta: ${this.numeroTarjeta}
    Firma: ${this.firma}
    `;
    return contenido;
  }

}
