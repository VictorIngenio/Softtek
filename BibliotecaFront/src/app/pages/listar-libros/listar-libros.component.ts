import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';
import { LibrosLista } from '../../models/librosLista.models';

@Component({
  selector: 'app-listar-libros',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './listar-libros.component.html',
  styleUrl: './listar-libros.component.css'
})
export class ListarLibrosComponent implements OnInit {
  libros: LibrosLista[] = [];

  constructor(private librosService: LibrosService,
              private router: Router) {
    
  }

  ngOnInit(): void {
    this.traerInformacion();
  }

  traerInformacion(): void {
    this.librosService.traerLibros()
    .subscribe(resp => {
      this.libros = resp;
    });
  }

  regresar(): void {
    this.router.navigateByUrl('principal');
  }
}
