import { Component, Input } from '@angular/core';
import { DataEntradas } from '../interfaces/data-entradas';

@Component({
  selector: 'app-resumen-items',
  standalone: true,
  imports: [],
  templateUrl: './resumen-items.component.html',
  styleUrl: './resumen-items.component.css'
})
export class ResumenItemsComponent {
  @Input()infoEntradas!:DataEntradas;

}
