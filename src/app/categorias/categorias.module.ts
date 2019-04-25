import { CategoriasService } from './categorias.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [PesquisaComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ToastModule
  ],
  exports: [
    PesquisaComponent
],
providers: [
  CategoriasService,
  MessageService
]
})
export class CategoriasModule { }
