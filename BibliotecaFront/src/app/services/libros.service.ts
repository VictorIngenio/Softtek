import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from '../models/libros.models';
import { LibrosLista } from '../models/librosLista.models';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private URL = 'https://localhost:7288/api/Libros';

  constructor(private http: HttpClient) { }

  crearLibro(libro: Libros): Observable<void> {
    return this.http.post<void>(`${ this.URL }/CrearLibro`, libro);
  }

  traerLibros(): Observable<LibrosLista[]> {
    return this.http.get<LibrosLista[]>(`${ this.URL }/TraerLibros`);
  }

  traerLibro(id: number): Observable<Libros> {
    return this.http.get<Libros>(`${ this.URL }/TraerLibro/${ id }`);
  }
}
