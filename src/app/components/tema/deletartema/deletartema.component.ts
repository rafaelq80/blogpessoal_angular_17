import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Tema } from '../../../models/Tema';
import { AlertService } from '../../../services/alert.service';
import { TemaService } from '../../../services/tema.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deletartema',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './deletartema.component.html',
  styleUrl: './deletartema.component.css'
})
export class DeletartemaComponent implements OnInit {

  temaId: number
  tema: Tema = new Tema()

  constructor(
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    if (environment.token === '') {
      this.alertService.info('', "Token Inválido!")
      this.router.navigate(['/'])
    }

    this.temaId = this.route.snapshot.params['id']
    this.getTemaById()
  }

  getTemaById() {
    this.temaService.getById(this.temaId).subscribe((resposta: Tema) => {
      this.tema = resposta
    })
  }

  deletarTema() {
    this.temaService.delete(this.temaId).subscribe({
      next: () => {
        this.alertService.sucesso('', 'Tema apagado com sucesso!')
        this.router.navigate(['/temas'])
      },
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 403:
            this.alertService.erro('', 'Token Inválido!')
            this.router.navigate([''])
            break;
          default:
            this.alertService.erro('', 'Erro ao Deletar o Tema')
        }
      }
    })

  }

  retornar(){
    this.router.navigate(['/temas'])
  }
}
