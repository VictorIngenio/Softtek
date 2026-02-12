import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Libros } from '../../models/libros.models';
import { Autores } from '../../models/autores.models';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-editar-libro',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './editar-libro.component.html',
  styleUrl: './editar-libro.component.css'
})
export class EditarLibroComponent implements OnInit {
  mensaje = "Campo obligatorio";
  formulario!: FormGroup
  id!: number;
  libro!: Libros;
  autores: Autores[] = [];
  nuevo: Libros = new Libros();
  
  constructor(private librosService: LibrosService,
              private autoresService: AutoresService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.librosService.traerLibro(this.id)
    .subscribe(resp => {
      this.libro = resp;
      this.traerAutores();
      this.cargarFormulario();
    });
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

  cargarFormulario(): void {
    this.formulario.controls['Titulo'].setValue(this.libro.titulo);
    this.formulario.controls['Anno'].setValue(this.libro.anno);
    this.formulario.controls['Genero'].setValue(this.libro.genero);
    this.formulario.controls['NumeroPaginas'].setValue(this.libro.numeroPaginas);
    this.formulario.controls['Autor'].setValue(this.libro.idAutor);
  }

  traerAutores(): void {
    this.autoresService.traerAutores()
    .subscribe(resp => {
      this.autores = resp;
    });
  }

  actualizar(): void {
    if (this.formulario.invalid) {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.nuevo.id = this.libro.id;
    this.nuevo.titulo = this.formulario.controls['Titulo'].value;
    this.nuevo.anno = this.formulario.controls['Anno'].value;
    this.nuevo.genero = this.formulario.controls['Genero'].value;
    this.nuevo.numeroPaginas = this.formulario.controls['NumeroPaginas'].value;
    this.nuevo.idAutor = this.formulario.controls['Autor'].value;

    this.librosService.actualizarLibro(this.nuevo)
    .subscribe(resp => {
      alert('Se actualizó el libro correctamente');
      this.router.navigateByUrl('principal');
    });
  }

  cancelar(): void {
    this.router.navigateByUrl('principal');
  }
}
