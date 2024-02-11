import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from './../../models/Usuario';


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
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  confirmarSenha(event: any) {
    this.confirmaSenha = event.target.value
  }

  cadastrar() {

    if (this.usuario.senha === undefined)
      alert('A Senha é Obrigatória!')

    if (this.usuario.senha === this.confirmaSenha && this.usuario.senha.length >= 8) {

      this.isLoading = true
      console.log(this.isLoading)
      this.usuarioService.cadastrar(this.usuario)
        .subscribe({
          next: (resposta: Usuario) => {
            this.usuario = resposta
            this.router.navigate([''])
            alert("Usuário Cadastrado com Sucesso")
          },
          error: (error: HttpErrorResponse) => {
            switch (error.status) {
              case 400:
                alert('Erro de Validação!')
                break;
              default:
                alert('Erro no Cadastro do Usuário')
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
