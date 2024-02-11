import { Component, OnInit } from '@angular/core';
import { CardtemaComponent } from "../cardtema/cardtema.component";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Tema } from '../../../models/Tema';
import { TemaService } from '../../../services/tema.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listartemas',
  standalone: true,
  templateUrl: './listartemas.component.html',
  styleUrl: './listartemas.component.css',
  imports: [
    CardtemaComponent,
    CommonModule
  ],
  providers:[TemaService]
})
export class ListartemasComponent implements OnInit {

  temas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      alert("Token Inválido!")
      this.router.navigate(['/'])
    }

    this.findAll()
  }

  findAll() {
    this.temaService.getAll().subscribe((resposta: Tema[]) => {
      this.temas = resposta
    })
  }

}
