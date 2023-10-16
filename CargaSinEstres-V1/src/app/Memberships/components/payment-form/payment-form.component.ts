import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
  nombre: string = '';
  apellidos: string = '';
  ruc: string = '';
  direccion: string = '';
  vigenciaSuscripcion: string = '';
  numeroTarjeta: string = '';
  CVV: string = '';
  fechaVencimiento: string = '';
  
  confirmacionVisible: boolean = false;
  
  firma: string = this.generarCodigoAleatorio();

  onSubmit() {
    if (this.validarDatos()) {
      this.confirmacionVisible = true;
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

    Nombre: ${this.nombre}
    Apellidos: ${this.apellidos}
    RUC: ${this.ruc}
    Dirección: ${this.direccion}
    Vigencia de Suscripción: ${this.vigenciaSuscripcion}
    Numero de Tarjeta: ${this.numeroTarjeta}
    Firma: ${this.firma}
    `;
    return contenido;
  }



}
