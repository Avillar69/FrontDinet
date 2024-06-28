import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../http/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {
  productos: any[] = [];
  nuevoProducto: any = {}
    ;
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos() {
    this.productoService.getProductos().
      subscribe({
        next: (data) => {
          this.productos = data;
        },
        error: (error) => {
          console.error('Error cargando producto', error);
        }
      });
  }
  agregarProducto() {
    this.productoService.crearProducto(this.nuevoProducto)
      .subscribe({
        next: (data) => {
          //this.nuevoProducto = {};
          this.cargarProductos();
        },
        error: (error) => {
          console.error('Error al crear producto', error);
        }
      })
  }
}
