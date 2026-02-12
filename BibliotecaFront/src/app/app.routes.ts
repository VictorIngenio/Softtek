import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListarLibrosComponent } from './pages/listar-libros/listar-libros.component';
import { ListarAutoresComponent } from './pages/listar-autores/listar-autores.component';
import { CrearAutoresComponent } from './pages/crear-autores/crear-autores.component';
import { CrearLibrosComponent } from './pages/crear-libros/crear-libros.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'listar-libros', component: ListarLibrosComponent },
    { path: 'listar-autores', component: ListarAutoresComponent },
    { path: 'crear-autor', component: CrearAutoresComponent },
    { path: 'crear-libro', component: CrearLibrosComponent }
];
