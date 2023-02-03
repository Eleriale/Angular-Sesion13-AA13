import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Configurar zona geografica
import { LOCALE_ID, NgModule } from '@angular/core';
import localeES from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES, 'es-PE')

@NgModule({
  declarations: [
    EjerciciosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EjerciciosComponent
  ]
})
export class PrincipalModule { }
