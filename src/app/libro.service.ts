import { Injectable } from '@angular/core';
import { Libro } from './libros/libro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private url='http://localhost:8081/Libro';
  constructor(private http:HttpClient) { }
  getListarLibros(){
    return this.http.get<Libro[]>(this.url);
  }
}
