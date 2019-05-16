import { CategoriasService } from './categorias.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PesquisaComponent, CategoriasCadastroComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    PesquisaComponent,
    CategoriasCadastroComponent
],
providers: [
  CategoriasService,
  MessageService
]
})
export class CategoriasModule { }
