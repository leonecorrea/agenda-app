import { ContatosProvider } from './../../providers/contatos/contatos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato-detalhe',
  templateUrl: 'contato-detalhe.html',
})
export class ContatoDetalhePage {
  contato = {nome: '', endereco: '', cep: '', lat: 0, long: 0, email: ''};
  cttparam: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contatosProvider: ContatosProvider) {
    this.cttparam = navParams.get('cttParam');

    if (this.cttparam != null) {
      this.contato.nome = this.cttparam.nome;
      this.contato.endereco = this.cttparam.endereco;
      this.contato.cep = this.cttparam.cep;
      this.contato.email = this.cttparam.email;
      this.contato.lat = this.cttparam.lat;
      this.contato.long = this.cttparam.long;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoDetalhePage');
  }

  confirmaContato(){
    const c = this.contato;

    if (this.cttparam != null) {
      // edita o contato
    } else {
      this.contatosProvider.addContato(c.nome, c.endereco, c.cep, c.lat, c.long, c.email);
    }
    
    this.navCtrl.pop();
  }

  cancelaContato(){
    this.navCtrl.pop();
  }

}
