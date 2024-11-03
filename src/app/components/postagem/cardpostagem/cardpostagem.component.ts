import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from '../../../models/Postagem';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardpostagem',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DatePipe,
  ],
  templateUrl: './cardpostagem.component.html',
  styleUrl: './cardpostagem.component.css',
  providers: [DatePipe]
})
export class CardpostagemComponent implements OnInit {

  @Input() postagem: Postagem;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {

  }

  getFormattedDate(data: string | Date) {
    const dateObj = new Date(data);
    dateObj.setHours(dateObj.getHours() + 3);

    console.log("Data: ", dateObj);

    // Ajusta a data para o timezone correto
    return dateObj.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  }

}
