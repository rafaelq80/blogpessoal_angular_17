import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from './../../models/Usuario';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmaSenha: string
  isLoading: boolean = false

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  confirmarSenha(event: any) {
    this.confirmaSenha = event.target.value
  }

  cadastrar() {

    if (this.usuario.senha === undefined)
      this.alertService.info('', 'A Senha é Obrigatória!')

    if (this.usuario.senha === this.confirmaSenha && this.usuario.senha.length >= 8) {

      this.isLoading = true
      console.log(this.isLoading)
      this.usuarioService.cadastrar(this.usuario)
        .subscribe({
          next: (resposta: Usuario) => {
            this.usuario = resposta
            this.router.navigate([''])
            this.alertService.sucesso('',"Usuário Cadastrado com Sucesso")
          },
          error: (error: HttpErrorResponse) => {
            switch (error.status) {
              case 400:
                this.alertService.erro('','Erro de Validação!')
                break;
              default:
                this.alertService.erro('','Erro no Cadastro do Usuário')
            }
          }
        });
    } else {
      alert('Dados estão inconsistentes. Verifique as informações do cadastro')
      this.usuario.senha = ''
      this.confirmaSenha = ''
    }
    this.isLoading = false
  }
}
