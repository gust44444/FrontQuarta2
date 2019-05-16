import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { PesquisaComponent } from './categorias/pesquisa/pesquisa.component';
import { CategoriasModule } from './categorias/categorias.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';

import{Routes, RouterModule} from '@angular/router';
const rotas: Routes = [
  {path: 'categorias', component: PesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
