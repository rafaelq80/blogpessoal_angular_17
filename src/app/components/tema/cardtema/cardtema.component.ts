import { Component, Input, OnInit } from '@angular/core';
import { Tema } from '../../../models/Tema';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardtema',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cardtema.component.html',
  styleUrl: './cardtema.component.css'
})
export class CardtemaComponent implements OnInit {

  @Input() tema: Tema;

  constructor() { }

  ngOnInit(): void {

  }

}
