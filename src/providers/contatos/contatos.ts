import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {
  pessoas: Array<{nome: string, endereco: string, cep: string, lat: number, log: number, email: string}> = [];

  constructor(public http: HttpClient) {
    console.log('Hello ContatosProvider Provider');
  }

  addContato(nome, endereco, cep, lat, log, email){

  }

  getContatos(): Array<{nome: string, endereco: string, cep: string, lat: number, log: number, email: string}>{
    return this.pessoas;
  }

}
