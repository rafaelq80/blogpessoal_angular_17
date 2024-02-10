import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from './../../models/Usuario';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgxSpinnerModule
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

        this.usuarioService.cadastrar(this.usuario).subscribe((resposta: Usuario) => {
          this.usuario = resposta
          this.router.navigate([''])
          alert("Usuário Cadastrado com Sucesso")
        })

    } else {
      alert('Dados estão inconsistentes. Verifique as informações do cadastro')
      this.usuario.senha = ''
      this.confirmaSenha = ''
    }
    this.isLoading = false
  }
}
