import { Component, OnInit } from '@angular/core';
import { Postagem } from '../../../models/Postagem';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AlertService } from '../../../services/alert.service';
import { PostagemService } from '../../../services/postagem.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deletarpostagem',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './deletarpostagem.component.html',
  styleUrl: './deletarpostagem.component.css'
})
export class DeletarpostagemComponent implements OnInit {

  postagemId: number
  postagem: Postagem = new Postagem()

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    if (environment.token === '') {
      this.alertService.info('', "Token Inválido!")
      this.router.navigate(['/'])
    }

    this.postagemId = this.route.snapshot.params['id']
    this.getPostagemById()
  }

  getPostagemById() {
    this.postagemService.getById(this.postagemId).subscribe((resposta: Postagem) => {
      this.postagem = resposta
    })
  }

  deletarPostagem() {
    this.postagemService.delete(this.postagemId).subscribe({
      next: () => {
        this.alertService.sucesso('', 'postagem apagada com sucesso!')
        this.router.navigate(['/postagens'])
      },
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 403:
            this.alertService.erro('', 'Token Inválido!')
            this.router.navigate([''])
            break;
          default:
            this.alertService.erro('', 'Erro ao Deletar a Postagem')
        }
      }
    })

  }

  retornar(){
    this.router.navigate(['/postagens'])
  }

}
