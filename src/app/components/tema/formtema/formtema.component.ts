import { Component, OnInit } from '@angular/core';
import { Tema } from '../../../models/Tema';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AlertService } from '../../../services/alert.service';
import { TemaService } from '../../../services/tema.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formtema',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TemaService
  ],
  templateUrl: './formtema.component.html',
  styleUrl: './formtema.component.css'
})
export class FormtemaComponent implements OnInit {

  tema: Tema = new Tema
  isLoading: boolean = false
  temaId: number = 0

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private temaService: TemaService,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.alertService.info('', "Token Inválido!")
      this.router.navigate(['/'])
    }

    this.temaId = this.route.snapshot.params['id']

    if (this.temaId !== undefined){
      this.getTemaById()
    }
  }

  getTemaById(){
    this.temaService.getById(this.temaId).subscribe((resposta: Tema) => {
      this.tema = resposta
    })
  }

  cadastrarTema() {
    this.temaService.post(this.tema).subscribe({
      next: (resposta: Tema) => {
        this.tema = resposta;
        this.alertService.sucesso('', 'Tema Cadastrado com sucesso!')
        this.router.navigate(['/temas'])
      },
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            this.alertService.erro('', 'Erro de Validação!')
            break;
          case 403:
            this.alertService.erro('', 'Token Inválido!')
            this.router.navigate([''])
            break;
          default:
            this.alertService.erro('', 'Erro ao Cadastar Tema')
        }
      }
    })

  }

  atualizarTema() {
    this.temaService.put(this.tema).subscribe({
      next: (resposta: Tema) => {
        this.tema = resposta;
        this.alertService.sucesso('', 'Tema Atualizado com sucesso!')
        this.router.navigate(['/temas'])
      },
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            this.alertService.erro('', 'Erro de Validação!')
            break;
          case 403:
            this.alertService.erro('', 'Token Inválido!')
            this.router.navigate([''])
            break;
          default:
            this.alertService.erro('', 'Erro ao Atualizar Tema')
        }
      }
    })

  }

  submitTema(){
    if (this.temaId === undefined){
      this.cadastrarTema()
    }else{
      this.atualizarTema()
    }
  }

}
