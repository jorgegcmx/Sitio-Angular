import { Component } from '@angular/core';
import { DataInformation } from '../interfaces/data-information';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  dataInformation: DataInformation = {
    name: 'Jorge Antonio González Camacho',
    description: `    
    6 años de experiencia en desarrollador web, dentro del sector industrial y financiero, implementando soluciones enfocadas a nuevas tecnologías y ceo, dentro de estas se encuentran, Java, Spring Boot, React JS, Next JS, JavaScript, Node JS, CSS3, Material UI, Bootstrap CSS, PHP, VB .net, Postgres SQL, SQL Server, MySQL, Mongo DB No SQL, FireBase Serverless, HTML5, Git. 
     ` ,
     herramientas: `
    Integraciones de API's de terceros como Paypal, Stripe, PayNearme, Mercado Pago, Validación de CFDI´s WS SAT, SmartLook, OneSignal para envió de Push Notifications, FireBase y Emails etc, conexión a tópicos de Kafka.
    `
  }
}
