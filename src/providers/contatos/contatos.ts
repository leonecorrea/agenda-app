import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {
  pessoas: Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email: string}> = [];

  constructor() {
    this.pessoas.push({
      nome: 'Bruno Leone Alexandre Pacheco Corrêa', endereco: 'Av. Senador Levindo Coelho', cep: '30664260', lat: -19.974837,
      long: -20.9909, email: 'contato@phandadesign.com.br'
    });
    this.pessoas.push({
      nome: 'Alexandre Montanha da Silva', endereco: 'Av. Senador Levindo Coelho', cep: '30664260', lat: -19.974837,
      long: -20.9909, email: 'contato@phandadesign.com.br'
    });
    this.pessoas.push({
      nome: 'Amanda da Silva Cunha', endereco: 'Av. Senador Levindo Coelho', cep: '30664260', lat: -19.974837,
      long: -20.9909, email: 'contato@phandadesign.com.br'
    });
    this.pessoas.push({
      nome: 'Arnado Cesar Coelho', endereco: 'Av. Senador Levindo Coelho', cep: '30664260', lat: -19.974837,
      long: -20.9909, email: 'contato@phandadesign.com.br'
    });
    this.pessoas.push({
      nome: 'Isabelly da Silva Cunha', endereco: 'Av. Senador Levindo Coelho', cep: '30664260', lat: -19.974837,
      long: -20.9909, email: 'contato@phandadesign.com.br'
    });
  }

  addContato(nome, endereco, cep, lat, long, email){
    this.pessoas.push({nome, endereco, cep, lat, long, email});
  }

  getContatos(): Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email: string}>{
    return this.pessoas;
  }

}
