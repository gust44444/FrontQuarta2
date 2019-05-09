import { Categoria } from './../model';
import { MessageService } from 'primeng/api';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {

  categoria = new Categoria();

  constructor(
    private service: CategoriasService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.categoria)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Categoria '+this.categoria.nome+' cadastrada'});
      form.reset();
    });
  }

}
