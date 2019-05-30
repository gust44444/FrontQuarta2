import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CategoriasService } from './../../categorias/categorias.service';
import { ProdutosServiceService } from './../produtos-service.service';
import { Produto, Categoria } from './../model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();
  categorias: Categoria[];

  constructor(
    private service: ProdutosServiceService,
    private categoriaService: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarCategorias();
  }

  pesquisarCategorias(){
    this.categoriaService.pesquisar("").then((dados)=>{this.categorias=dados;});
  }

  salvar(form: FormControl){
    this.service.adicionar(this.produto).then(()=>{this.messageService.add({severity:'sucess',summary:'Edição',detail:'Produto'+this.produto.nome})})
  }

}
