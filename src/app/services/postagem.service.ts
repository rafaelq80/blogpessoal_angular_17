import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  urlDeploy: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAll(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`${this.urlDeploy}/postagems`, this.token)
  }

  getById(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`${this.urlDeploy}/postagems/${id}`, this.token)
  }

  post(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>(`${this.urlDeploy}/postagems`, postagem, this.token)
  }

  put(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>(`${this.urlDeploy}/postagems`, postagem, this.token)
  }

  delete(id: number){
    return this.http.delete(`${this.urlDeploy}/postagems/${id}`, this.token)
  }

}
