import { Component, OnInit } from '@angular/core';
import { CardtemaComponent } from "../cardtema/cardtema.component";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Tema } from '../../../models/Tema';
import { TemaService } from '../../../services/tema.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../services/alert.service';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listartemas',
  standalone: true,
  templateUrl: './listartemas.component.html',
  styleUrl: './listartemas.component.css',
  imports: [
    CardtemaComponent,
    CommonModule,
    NgxLoadingModule,
  ],
  providers:[TemaService]
})
export class ListartemasComponent implements OnInit {

temas: Tema[]
isLoading: boolean = true;

  constructor(
    private router: Router,
    private temaService: TemaService,
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
    this.temaService.getAll().subscribe({
      next:(resposta: Tema[]) => {
      this.temas = resposta
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
