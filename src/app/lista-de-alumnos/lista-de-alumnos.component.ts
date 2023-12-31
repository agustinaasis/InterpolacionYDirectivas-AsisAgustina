import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss']
})
export class ListaDeAlumnosComponent {

  estudiantes = [
    new alumnos (1, 'Carlos', 'Martinez', 10.05),
    new alumnos (2, 'Sandra', 'Ibañez', 12.06),
    new alumnos (3, 'Manuel', 'Suarez', 17.03),
    new alumnos (4, 'Irene', 'Sandoval', 11.08),
    new alumnos (5, 'Cecilia', 'Miró', 14.04),
  ]

}

class alumnos {
  id: number;
  nombre: string;
  apellido: string;
  fecha:number;


  constructor (id:number, nombre:string, apellido:string, fecha:number) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
  }
}

