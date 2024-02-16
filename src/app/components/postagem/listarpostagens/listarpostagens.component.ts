import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Postagem } from '../../../models/Postagem';
import { Tema } from '../../../models/Tema';
import { PostagemService } from '../../../services/postagem.service';
import { CardpostagemComponent } from "../cardpostagem/cardpostagem.component";
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-listarpostagens',
  standalone: true,
  templateUrl: './listarpostagens.component.html',
  styleUrl: './listarpostagens.component.css',
  imports: [
    CardpostagemComponent,
    CommonModule,
    NgxLoadingModule,
  ],
  providers: [PostagemService]
})
export class ListarpostagensComponent implements OnInit {

  postagens: Postagem[]
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.alertService.info('',"Token Inválido!")
      this.router.navigate(['/'])
    }

    this.findAll()
  }

  findAll() {
    this.postagemService.getAll().subscribe({
      next:(resposta: Postagem[]) => {
      this.postagens = resposta
      this.isLoading = false
    },
    error: (error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          this.alertService.erro('', 'Acesso Negado!')
          this.isLoading = false
          break;
        case 403:
          this.alertService.erro('', 'Token Inválido!')
          this.router.navigate([''])
          break;
        default:
          this.alertService.erro('', 'Erro ao Listar Tema')
          this.isLoading = false
      }
    }
  })

}
}
