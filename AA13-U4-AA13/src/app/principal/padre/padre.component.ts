import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  constructor(private formBuilder : FormBuilder){ }

  datos_padre: any;
  botonDeshabilitado = false;
  mostrar : boolean = false;

  registroForm = this.formBuilder.group({
  nombres: ['',Validators.required],
  apellidos: ['', Validators.required],
  telefono: ['', Validators.required],
  direccion:['',Validators.required],
  estadoCivil:['',Validators.required],
});

  // Generar un metodo get para cada campo del formulario reactivo
  get nombres(){ return this.registroForm.get('nombres');}
  get apellidos(){ return this.registroForm.get('apellidos');}
  get telefono(){ return this.registroForm.get('telefono');}
  get direccion(){ return this.registroForm.get('direccion');}  
  get estadoCivil(){ return this.registroForm.get('estadoCivil');}

    // genera que el registroForm se vuelva un array 

    // this.datos_padre = Object.values(this.registroForm.getRawValue()); 

    Enviar(){
      this.datos_padre = (this.registroForm.value); 
    }

    Activar(){
      if(this.registroForm.valid){
        this.botonDeshabilitado = true;
      } else {
        this.botonDeshabilitado = false;
      }
    }

    ngOnInit(){
      this.registroForm.statusChanges.subscribe(status => {
        this.botonDeshabilitado = status === 'VALID';
      });
    }

    onClear() {
      this.registroForm.reset();
    }
}
