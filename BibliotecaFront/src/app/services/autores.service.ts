import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autores } from '../models/autores.models';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private URL = 'https://localhost:7288/api/Autores';

  constructor(private http: HttpClient) { }

  crearAutor(autor: Autores): Observable<void> {
    return this.http.post<void>(`${ this.URL }/CrearAutor`, autor);
  }

  traerAutores(): Observable<Autores[]> {
    return this.http.get<Autores[]>(`${ this.URL }/TraerAutores`);
  }

  traerAutor(id: number): Observable<Autores> {
    return this.http.get<Autores>(`${ this.URL }/TraerAutor/${ id }`);
  }
}
