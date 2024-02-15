import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from '../../../models/Postagem';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardpostagem',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './cardpostagem.component.html',
  styleUrl: './cardpostagem.component.css'
})
export class CardpostagemComponent implements OnInit {

  @Input() postagem: Postagem;

  constructor() { }

  ngOnInit(): void {

  }

}
