import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Autores } from '../../models/autores.models';

@Component({
  selector: 'app-crear-autores',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './crear-autores.component.html',
  styleUrl: './crear-autores.component.css'
})
export class CrearAutoresComponent implements OnInit {
  mensaje = "Campo obligatorio";
  formulario!: FormGroup
  autor: Autores = new Autores();

  constructor(private autoresService: AutoresService,
              private router: Router,
              private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    
  }

  get nombresObligatorio(): boolean{
    return this.formulario.get('NombreCompleto')!.invalid && this.formulario.get('NombreCompleto')!.touched;
  }

  get fechaObligatoria(): boolean{
    return this.formulario.get('FechaNacimiento')!.invalid && this.formulario.get('FechaNacimiento')!.touched;
  }

  get ciudadObligatoria(): boolean{
    return this.formulario.get('CiudadProcedencia')!.invalid && this.formulario.get('CiudadProcedencia')!.touched;
  }

  get correoObligatorio(): boolean{
    return this.formulario.get('CorreoElectronico')!.invalid && this.formulario.get('CorreoElectronico')!.touched;
  }

  crearFormulario(): void {
    this.formulario = this.fb.group({
      NombreCompleto: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      CiudadProcedencia: ['', Validators.required],
      CorreoElectronico: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.formulario.invalid) {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.autor.id = 0;
    this.autor.nombreCompleto = this.formulario.controls['NombreCompleto'].value;
    this.autor.fechaNacimiento = this.formulario.controls['FechaNacimiento'].value;
    this.autor.ciudadProcedencia = this.formulario.controls['CiudadProcedencia'].value;
    this.autor.correoElectronico = this.formulario.controls['CorreoElectronico'].value;

    this.autoresService.crearAutor(this.autor)
    .subscribe(resp => {
      alert('Se guardó el autor correctamente');
      this.router.navigateByUrl('principal');
    });
  }

  cancelar(): void {
    this.router.navigateByUrl('principal');
  }
}
