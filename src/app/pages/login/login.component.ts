import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { UsuarioService } from '../../services/usuario.service';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin
  isLoading: boolean = false

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  logar() {
    this.usuarioService.login(this.usuarioLogin)
      .subscribe({
        next: (resposta: UsuarioLogin) => {

          this.usuarioLogin = resposta

          environment.id = this.usuarioLogin.id
          environment.nome = this.usuarioLogin.nome
          environment.usuario = this.usuarioLogin.usuario
          environment.senha = ''
          environment.foto = this.usuarioLogin.foto
          environment.token = this.usuarioLogin.token

          console.log(environment.id)
          console.log(environment.nome)
          console.log(environment.usuario)
          console.log(environment.senha)
          console.log(environment.foto)
          console.log(environment.token)

          this.router.navigate(['/home'])
        },
        error: (error: HttpErrorResponse) => {
          switch (error.status) {
            case 400:
              alert('Erro de Validação!')
              break;
            case 401:
              alert('Usuário e/ou Senha inválidos!')
              break;
            default:
              alert('Erro ao Autenticar o Usuário')
          }
        }
      })
  }

}
