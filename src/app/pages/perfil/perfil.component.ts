import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  providers:[],
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
    private alertService: AlertService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.alertService.info('','Token Inválido!')
      this.router.navigate(['/'])
    }
  }



}
