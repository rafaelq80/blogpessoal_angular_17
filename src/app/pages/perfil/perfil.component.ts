import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  id = environment.id
  nome = environment.nome
  usuario = environment.usuario
  foto = environment.foto

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert("Token Inválido!")
      this.router.navigate(['/'])
    }
  }



}
