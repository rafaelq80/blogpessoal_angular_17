import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Postagem } from '../../../models/Postagem';
import { Tema } from '../../../models/Tema';
import { PostagemService } from '../../../services/postagem.service';
import { CardpostagemComponent } from "../cardpostagem/cardpostagem.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listarpostagens',
  standalone: true,
  templateUrl: './listarpostagens.component.html',
  styleUrl: './listarpostagens.component.css',
  imports: [
    CardpostagemComponent,
    CommonModule],
  providers: [PostagemService]
})
export class ListarpostagensComponent implements OnInit {

  postagens: Postagem[]

  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      alert("Token Inválido!")
      this.router.navigate(['/'])
    }

    this.findAll()
  }

  findAll() {
    this.postagemService.getAll().subscribe((resposta: Postagem[]) => {
      this.postagens = resposta
    })
  }
}
