import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  categorias = [];

  constructor(
        private service:CategoriasService,
        private msg: MessageService) { }

  pesquisar(){
    this.service.pesquisar()
    .then((dados)=>{
      this.categorias=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  excluir(categoria: any){
    this.service.excluir(categoria.id).then(() =>{
      this.pesquisar();
      this.msg.add({severity:'Exclusão'+categoria.nome, summary:'Service Message',detail:'Categoria'});
    });
  }
}
