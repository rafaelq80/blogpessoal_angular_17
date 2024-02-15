import { Component, inject, EventEmitter, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListarpostagensComponent } from "../../components/postagem/listarpostagens/listarpostagens.component";
import { DialogRef, DialogService } from '@ngneat/dialog';
import { FormpostagemComponent } from '../../components/postagem/formpostagem/formpostagem.component';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
      RouterLink,
      ListarpostagensComponent,
    ],
    providers:[
      ModalService,
    ]
})
export class HomeComponent {

  constructor(
    private modalService: ModalService
  ) { }

open(event: any){
  event.preventDefault()
  this.modalService.show()
}

}
