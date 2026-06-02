import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //para barrabusqueda
import { ProductoService } from '../services/admin-productos.service';

@Component({
  selector: 'app-admin-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-productos.html',
  styleUrls: ['./admin-productos.css']
})

export class AdminProductosComponent implements OnInit {
  productos: any[] = []; // sin productos

  textoBusqueda: string = '';
  criterioBusqueda: string = 'nombre';

  constructor(
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerProductos().subscribe({
      next: (datos) => {

        this.productos = datos.filter((producto: any) => producto.activo === 1);
        console.log('Productos cargados:', this.productos);

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }

  get productosFiltrados() {
    
    if (!this.textoBusqueda) {
      return this.productos;
    }

    const texto = this.textoBusqueda.toLowerCase();

    
    return this.productos.filter(producto => {
      if (this.criterioBusqueda === 'nombre') {
        return producto.nombre?.toLowerCase().includes(texto);
      } 
      else if (this.criterioBusqueda === 'categoria') {
        return producto.categoria?.toLowerCase().includes(texto);
      } 
      else if (this.criterioBusqueda === 'id') {
        return producto.idproducto?.toString().includes(texto);
      }
      return true;
    });
  }
}