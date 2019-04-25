import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  pesquisar():Promise<any>{
    return this.http.get<any>(this.categoriasURL).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.categoriasURL+"/"+id).toPromise().then(() => null);
  }
}
