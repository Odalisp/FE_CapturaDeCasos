import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cedula } from 'src/app/interface/cedula';
import { DireccionImputado } from 'src/app/interface/Direccion-Imputado';
import { Imputado } from 'src/app/interface/imputado';
import { Solicitante } from 'src/app/interface/solicitante';

@Component({
  selector: 'app-datos-del-solicitante',
  templateUrl: './datos-del-solicitante.component.html',
  styleUrls: ['./datos-del-solicitante.component.css']
})

export class DatosDelSolicitanteComponent implements OnInit {

  form: FormGroup

  constructor(private solicitud:FormBuilder) {
    this.form = this.solicitud.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      contacto: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      sexo: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      apodo: [''],
      estadoCivil: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      ocupacion: ['', Validators.required],
      idioma: ['', Validators.required],
      interprete: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  agregarDatos(){

    //Este es el objeto creado para enviar los datos a la base de datos

    /*const datos: Solicitante = {
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
    }*/

    const validacion: Cedula ={
      id: this.form.get('id')?.value,
      cedula: this.form.get('cedula')?.value
    }     
    
  }
}

declare function validaCedula(cedula: string): boolean;
export default validaCedula;