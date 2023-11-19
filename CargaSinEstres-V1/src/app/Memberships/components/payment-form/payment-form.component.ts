import { Component, Input } from '@angular/core';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { Company } from 'src/app/models/company.model';
import { Subscription } from 'src/app/models/subscription.model';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {

  constructor(private dataService: CargaSinEstresDataService) { }

  //heredan los datos de un parent
  @Input() companyId: any; 
  @Input() companyName: any; 
  @Input() companyLogo: any; 

  correo: string = '';
  contrasenia: string = '';
  ruc: string = '';
  direccion: string = '';
  vigenciaSuscripcion: string = '';
  numeroTarjeta: string = '';
  CVV: string = '';
  fechaVencimiento: string = '';

  confirmacionVisible: boolean = false;
  //para desactivar el boton de confirmacion (no hacer spam de subscripciones)
  botonDesactivado: boolean = false;

  //incializar la firma aleatoria
  firma: string = this.generarCodigoAleatorio();

  onSubmit() {
    if (this.validarDatos()) {
      this.confirmacionVisible = true;
      this.botonDesactivado = true;

      // Obtener la información de la empresa
      this.dataService.getCompaniesForLogin(this.correo, this.contrasenia).subscribe(
        (CompanyArray: Company[]) => {

          if (CompanyArray.length > 0) {

            const companyData = CompanyArray[0];

            const nuevaSuscripcion: Subscription = {
              id: undefined,
              firma: this.firma,
              idCompany: companyData.id,
              subscriptionDate: new Date().toISOString(), 
              subscriptionType: this.vigenciaSuscripcion, 
              payment: {
                paymentMethod: this.numeroTarjeta,
              },
              hiredCompany: {
                name: companyData.name, 
                logo: companyData.photo 
              }
            };

          // Crear la suscripción
          this.dataService.createSubscription(nuevaSuscripcion).subscribe(
            (response) => {
              console.log('Suscripción creada con éxito', response);
            },
            (error) => {
              console.error('Error al crear la suscripción', error);
            }
          );
          }
        },
        (error) => {
          console.error('Error al obtener la información de la empresa', error);
        }
      );
    }
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

  validarDatos(): boolean {

    if (!this.nombre || !this.apellidos || !this.ruc || !this.direccion || !this.vigenciaSuscripcion || !this.numeroTarjeta || !this.CVV || !this.fechaVencimiento) {
      return false;
    }

    if (!/^\d{11}$/.test(this.ruc)) return false;

    if (!/^\d{16}$/.test(this.numeroTarjeta)) return false;

    if (!/^\d{3}$/.test(this.CVV)) return false;
  
    return true;
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
