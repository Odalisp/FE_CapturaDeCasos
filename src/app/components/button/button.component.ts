import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DireccionImputado } from 'src/app/interface/Direccion-Imputado';
import { Imputado } from 'src/app/interface/imputado';
import { Solicitante } from 'src/app/interface/solicitante';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 
  form: FormGroup
  constructor(private soli: FormBuilder) {
    this.form = this.soli.group({
      
    })
  }

  ngOnInit(): void {
  }
  agregarDatos(){

    //Este es el objeto creado para enviar los datos a la base de datos

    const datos: Solicitante = {
      id: this.form.get('id')?.value,
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      contacto: this.form.get('contacto')?.value
    }

    const datosImputado: Imputado = {
      id: this.form.get('id')?.value,
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      sexo: this.form.get('sexo')?.value,
      nacionalidad: this.form.get('nacionalidad')?.value,
      fechaNacimiento: this.form.get('fechaNacimiento')?.value,
      apodo: this.form.get('apodo')?.value,
      estadoCivil: this.form.get('estadoCivil')?.value
    }
    
    const direccionImputado: DireccionImputado = {
      id: this.form.get('id')?.value,
      direccion: this.form.get('direccion')?.value,
      ciudad: this.form.get('ciudad')?.value,
      telefono: this.form.get('telefono')?.value,
      ocupacion: this.form.get('ocupacion')?.value,
      idioma: this.form.get('idioma')?.value,
      interprete: this.form.get('interprete')?.value
    }
  }
}
