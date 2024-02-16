import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
  ],
  providers: [
    UsuarioService
  ]
})
export class AppComponent {
  title = 'blogpessoal';

  constructor(
    public usuario: UsuarioService
  ) { }

}
