import { Component, OnInit } from '@angular/core';
import { Rutinas } from '../../models/rutina';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  public rutina: Rutinas[] = [];

  constructor() { 

    this.rutina = [
    new Rutinas("Rutina Uno", "Descripcion Uno", "X semanas", '../../assets/images/rutinaUno.jpg'),
    new Rutinas("Rutina Dos", "Descripcion Dos", "X semanas", '../../assets/images/rutinaDos.jpg'),
    new Rutinas("Rutina Tres", "Descripcion Tres", "X semanas", '../../assets/images/rutinaUno.jpg'),
    new Rutinas("Rutina Cuatro", "Descripcion Cuatro", "X semanas", '../../assets/images/rutinaDos.jpg'),
    new Rutinas("Rutina Cuatro", "Descripcion Cuatro", "X semanas", '../../assets/images/rutinaDos.jpg'),
    
    ];

  }

  ngOnInit(): void {
  }

}
