import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl:'./dashboard.html',
    styleUrls: ['./dashboard.css']
})

export class dashboardComponent {
    constructor (private router: Router) {}

    irAProductos() {
        this.router.navigate(['/administrar-productos']);
    }

    irAUsuarios() {
        this.router.navigate(['/administrar-usuarios']);
    }  

    cerrarSesion() {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
}
