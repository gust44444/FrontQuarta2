import { Categoria } from './../model';
import { MessageService } from 'primeng/api';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {

  categoria = new Categoria();

  constructor(
    private service: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  //  private rotaP: Router
  ) { }

  ngOnInit() {
    const codigoCategoria = this.rota.snapshot.params['id'];
    if(codigoCategoria){
      this.carregarCategoria(codigoCategoria);
    }
  }

  carregarCategoria(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.categoria = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.categoria)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Categoria '+this.categoria.nome+' cadastrada'});
      form.reset();
    });
  }


 alterar(form: FormControl) {
  this.service.alterar(this.categoria)
  .then( ()=>{
    this.messageService.add({severity:'success', summary:'Edição', detail:'Categoria '+this.categoria.nome+' alterada'});
    form.reset();
  });
}

salvar(form: FormControl) {
  if(this.editando){
    this.alterar(form);
  }else{
    this.inserir(form);
  }

}

get editando(){
  return Boolean(this.categoria.id);
}



}
