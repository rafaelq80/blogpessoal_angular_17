import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tema } from '../models/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  urlDeploy: string = environment.api

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAll(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${this.urlDeploy}/temas`, this.token)
  }

  getById(id: number): Observable<Tema>{
    return this.http.get<Tema>(`${this.urlDeploy}/temas/${id}`, this.token)
  }

  post(Tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(`${this.urlDeploy}/temas`, Tema, this.token)
  }

  put(Tema: Tema): Observable<Tema>{
    return this.http.put<Tema>(`${this.urlDeploy}/temas`, Tema, this.token)
  }

  delete(id: number){
    return this.http.delete(`${this.urlDeploy}/temas/${id}`, this.token)
  }

}
