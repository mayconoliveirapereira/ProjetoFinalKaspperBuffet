import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { HomeComponent } from './components/paginas/home/home.component';
import { QuemsomosComponent } from './components/paginas/quemsomos/quemsomos.component';
import { BlogComponent } from './components/paginas/blog/blog.component';
import { ContatoComponent } from './components/paginas/contato/contato.component';
import { EventosComponent } from './components/paginas/eventos/eventos.component';
import { ServicosComponent } from './components/paginas/servicos/servicos.component';
import { LoginComponent } from './components/paginas/login/login.component';
import { CasamentosebodasComponent } from './components/dropdown/casamentosebodas/casamentosebodas.component';
import { AniversariosComponent } from './components/dropdown/aniversarios/aniversarios.component';
import { CorporativosComponent } from './components/dropdown/corporativos/corporativos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'view', component: ViewusersComponent},
  { path: 'add', component: AdduserComponent },
  { path: 'update/:id', component: UpdateuserComponent },
  { path: 'quemsomos', component: QuemsomosComponent},
  { path: 'servicos', component: ServicosComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'casamentosebodas', component: CasamentosebodasComponent},
  { path: 'aniversarios', component: AniversariosComponent},
  { path: 'corporativos', component: CorporativosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
