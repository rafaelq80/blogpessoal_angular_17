import { Component } from '@angular/core';
import { ListartemasComponent } from "../../components/tema/listartemas/listartemas.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ListartemasComponent]
})
export class HomeComponent {

}
