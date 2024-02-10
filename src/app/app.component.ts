import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastroComponent } from "./pages/cadastro/cadastro.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        FormsModule,
        NavbarComponent,
        FooterComponent,
        CadastroComponent
    ]
})
export class AppComponent {
  title = 'blogpessoal';
}
