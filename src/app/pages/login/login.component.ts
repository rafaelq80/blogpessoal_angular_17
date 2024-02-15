import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { AlertService } from '../../services/alert.service';
import { UsuarioService } from '../../services/usuario.service';

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
    private router: Router,
    private alertService: AlertService
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

          this.alertService.sucesso('','Usuário Autenticado com Sucesso!')
          this.router.navigate(['/home'])
        },
        error: (error: HttpErrorResponse) => {
          switch (error.status) {
            case 400:
              this.alertService.erro('','Erro de Validação!')
              break;
            case 401:
              this.alertService.erro('','Usuário e/ou Senha inválidos!')
              break;
            default:
              this.alertService.erro('','Erro ao Autenticar o Usuário')
          }
        }
      })
  }

}
