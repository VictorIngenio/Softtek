import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { Router } from '@angular/router';
import { Autores } from '../../models/autores.models';

@Component({
  selector: 'app-listar-autores',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './listar-autores.component.html',
  styleUrl: './listar-autores.component.css'
})
export class ListarAutoresComponent implements OnInit {
  autores: Autores[] = [];

  constructor(private autoresService: AutoresService,
              private router: Router) {
    
  }

  ngOnInit(): void {
    this.traerInformacion();
  }

  traerInformacion(): void {
    this.autoresService.traerAutores()
    .subscribe(resp => {
      this.autores = resp;
    });
  }

  regresar(): void {
    this.router.navigateByUrl('principal');
  }
}
