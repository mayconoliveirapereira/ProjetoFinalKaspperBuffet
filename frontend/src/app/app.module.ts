import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/paginas/home/home.component';
import { QuemsomosComponent } from './components/paginas/quemsomos/quemsomos.component';
import { BlogComponent } from './components/paginas/blog/blog.component';
import { EventosComponent } from './components/paginas/eventos/eventos.component';
import { ServicosComponent } from './components/paginas/servicos/servicos.component';
import { ContatoComponent } from './components/paginas/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CasamentosebodasComponent } from './components/dropdown/casamentosebodas/casamentosebodas.component';
import { AniversariosComponent } from './components/dropdown/aniversarios/aniversarios.component';
import { CorporativosComponent } from './components/dropdown/corporativos/corporativos.component';
import { LoginComponent } from './components/paginas/login/login.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    UpdateuserComponent,
    ViewusersComponent,
    HomeComponent,
    QuemsomosComponent,
    BlogComponent,
    EventosComponent,
    ServicosComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    CasamentosebodasComponent,
    AniversariosComponent,
    CorporativosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
