import { Routes } from '@angular/router';
import { DeletarpostagemComponent } from './components/postagem/deletarpostagem/deletarpostagem.component';
import { FormpostagemComponent } from './components/postagem/formpostagem/formpostagem.component';
import { ListarpostagensComponent } from './components/postagem/listarpostagens/listarpostagens.component';
import { DeletartemaComponent } from './components/tema/deletartema/deletartema.component';
import { FormtemaComponent } from './components/tema/formtema/formtema.component';
import { ListartemasComponent } from './components/tema/listartemas/listartemas.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'temas', component: ListartemasComponent },
  { path: 'cadastrartema', component: FormtemaComponent },
  { path: 'editartema/:id', component: FormtemaComponent },
  { path: 'deletartema/:id', component: DeletartemaComponent },
  { path: 'postagens', component: ListarpostagensComponent },
  { path: 'cadastrarpostagem', component: FormpostagemComponent },
  { path: 'editarpostagem/:id', component: FormpostagemComponent },
  { path: 'deletarpostagem/:id', component: DeletarpostagemComponent },
  { path: 'perfil', component: PerfilComponent },
];
