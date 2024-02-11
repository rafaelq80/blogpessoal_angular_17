import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UsuarioLogin } from './../models/UsuarioLogin'
import { Usuario } from '../models/Usuario';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }

 urlDeploy: string = 'http://localhost:8080'

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.urlDeploy}/usuarios/cadastrar`, usuario)
    .pipe(
      catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
      })
      )
  }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>(`${this.urlDeploy}/usuarios/logar`, usuarioLogin)
  }
}
