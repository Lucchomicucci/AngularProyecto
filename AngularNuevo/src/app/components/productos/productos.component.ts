import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos: Productos[];
  constructor() { 
    this.productos = [
      new Productos("BelieveFitness", 750, "../../assets/images/remera1.png"),
      new Productos("BelieveYourself", 800, "../../assets/images/remera2.png"),
      new Productos("SuperHeroes", 800, "../../assets/images/REMERA3BIS.png"),
      new Productos("Pain&Pride", 750, "../../assets/images/remera4.png"),
      new Productos("BlackBasic", 600, "../../assets/images/remera5.png"),
      new Productos("BlueBasic", 600, "../../assets/images/remera6.png"),
    ]
  }

  ngOnInit(): void {
  }

}
