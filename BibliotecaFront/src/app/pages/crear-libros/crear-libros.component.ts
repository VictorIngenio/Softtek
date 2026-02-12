import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Libros } from '../../models/libros.models';
import { AutoresService } from '../../services/autores.service';
import { Autores } from '../../models/autores.models';

@Component({
  selector: 'app-crear-libros',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './crear-libros.component.html',
  styleUrl: './crear-libros.component.css'
})
export class CrearLibrosComponent implements OnInit {
  mensaje = "Campo obligatorio";
  formulario!: FormGroup;
  libro: Libros = new Libros();
  autores: Autores[] = [];

  constructor(private librosService: LibrosService,
              private autoresService: AutoresService,
              private router: Router,
              private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.traerAutores();
  }

  get tituloObligatorio(): boolean{
    return this.formulario.get('Titulo')!.invalid && this.formulario.get('Titulo')!.touched;
  }

  get annoObligatorio(): boolean{
    return this.formulario.get('Anno')!.invalid && this.formulario.get('Anno')!.touched;
  }

  get generoObligatorio(): boolean{
    return this.formulario.get('Genero')!.invalid && this.formulario.get('Genero')!.touched;
  }

  get paginasObligatorio(): boolean{
    return this.formulario.get('NumeroPaginas')!.invalid && this.formulario.get('NumeroPaginas')!.touched;
  }

  get autorObligatorio(): boolean{
    return this.formulario.get('Autor')!.invalid && this.formulario.get('Autor')!.touched;
  }

  crearFormulario(): void {
    this.formulario = this.fb.group({
      Titulo: ['', Validators.required],
      Anno: ['', Validators.required],
      Genero: ['', Validators.required],
      NumeroPaginas: ['', Validators.required],
      Autor: ['', Validators.required]
    });
  }

  traerAutores(): void {
    this.autoresService.traerAutores()
    .subscribe(resp => {
      this.autores = resp;
    });
  }

  guardar(): void {
    if (this.formulario.invalid) {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.libro.id = 0;
    this.libro.titulo = this.formulario.controls['Titulo'].value;
    this.libro.anno = this.formulario.controls['Anno'].value;
    this.libro.genero = this.formulario.controls['Genero'].value;
    this.libro.numeroPaginas = this.formulario.controls['NumeroPaginas'].value;
    this.libro.idAutor = this.formulario.controls['Autor'].value;

    this.librosService.crearLibro(this.libro)
    .subscribe(resp => {
      alert('Se guardó el libro correctamente');
      this.router.navigateByUrl('principal');
    });
  }

  cancelar(): void {
    this.router.navigateByUrl('principal');
  }
}
