import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  providers: [UsuarioService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  logout() {
    environment.id = 0
    environment.nome = ''
    environment.usuario = ''
    environment.senha = ''
    environment.foto = ''
    environment.token = ''
    this.router.navigate(['/'])

  }

}
