import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ListartemasComponent } from './components/tema/listartemas/listartemas.component';
import { ListarpostagensComponent } from './components/postagem/listarpostagens/listarpostagens.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'temas', component: ListartemasComponent },
  { path: 'postagens', component: ListarpostagensComponent },
  { path: 'perfil', component: PerfilComponent },
];
