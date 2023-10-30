import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
  datos: any;

  constructor(private productosService: ProductosService) {
  }
  ngOnInit() {
    this.productosService.obtenerProdctos().subscribe(
      datos => this.datos = datos
    )
  }

}
