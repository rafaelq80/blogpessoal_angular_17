import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from '../../../models/Postagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardpostagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardpostagem.component.html',
  styleUrl: './cardpostagem.component.css'
})
export class CardpostagemComponent implements OnInit {

  @Input() postagem: Postagem;

  constructor() { }

  ngOnInit(): void {

  }

}
