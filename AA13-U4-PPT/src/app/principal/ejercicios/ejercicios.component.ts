import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {

  title: string = 'uso de pipes';
  upperCase!: string;
  currency!: number;

  currencyArray = ['Selecciona el tipo de moneda', 'USD', 'EUR', 'CAD', 'JPY', 'PEN'];

  selectedCurrency: string = 'Selecciona el tipo de moneda';

}
