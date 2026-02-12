import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(private router: Router) {
    
  }

  listarLibros(): void {
    this.router.navigateByUrl('listar-libros');
  }

  listarAutores(): void {
    this.router.navigateByUrl('listar-autores');
  }

  registrarLibro(): void {
    this.router.navigateByUrl('crear-libro');
  }

  registrarAutor(): void {
    this.router.navigateByUrl('crear-autor');
  }
}
