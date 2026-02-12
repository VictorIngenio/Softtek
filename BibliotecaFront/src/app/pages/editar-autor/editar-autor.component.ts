import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Autores } from '../../models/autores.models';

@Component({
  selector: 'app-editar-autor',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './editar-autor.component.html',
  styleUrl: './editar-autor.component.css'
})
export class EditarAutorComponent implements OnInit {
  mensaje = "Campo obligatorio";
  formulario!: FormGroup;
  id!: number;
  autor!: Autores;
  nuevo: Autores = new Autores();

  constructor(private autoresService: AutoresService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.autoresService.traerAutor(this.id)
    .subscribe(resp => {
      this.autor = resp;
      this.cargarFormulario();
    });
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

  cargarFormulario(): void {
    this.formulario.controls['NombreCompleto'].setValue(this.autor.nombreCompleto);
    this.formulario.controls['FechaNacimiento'].setValue(this.autor.fechaNacimiento);
    this.formulario.controls['CiudadProcedencia'].setValue(this.autor.ciudadProcedencia);
    this.formulario.controls['CorreoElectronico'].setValue(this.autor.correoElectronico);
  }

  actualizar(): void {
    if (this.formulario.invalid) {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.nuevo.id = this.autor.id;
    this.nuevo.nombreCompleto = this.formulario.controls['NombreCompleto'].value;
    this.nuevo.fechaNacimiento = this.formulario.controls['FechaNacimiento'].value;
    this.nuevo.ciudadProcedencia = this.formulario.controls['CiudadProcedencia'].value;
    this.nuevo.correoElectronico = this.formulario.controls['CorreoElectronico'].value;

    this.autoresService.actualizarAutor(this.nuevo)
    .subscribe(resp => {
      alert('Se actualizó el autor correctamente');
      this.router.navigateByUrl('principal');
    });
  }

  cancelar(): void {
    this.router.navigateByUrl('principal');
  }
}
