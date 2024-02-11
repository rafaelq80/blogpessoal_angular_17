import { Component } from '@angular/core';
import { ListartemasComponent } from "../../components/tema/listartemas/listartemas.component";
import { ListarpostagensComponent } from "../../components/postagem/listarpostagens/listarpostagens.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ListartemasComponent, ListarpostagensComponent]
})
export class HomeComponent {

}
