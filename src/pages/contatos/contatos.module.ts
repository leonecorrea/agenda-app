import { ContatosProvider } from './../../providers/contatos/contatos';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatosPage } from './contatos';
import { ContatoDetalhePage } from '../contato-detalhe/contato-detalhe';

@NgModule({
  declarations: [
    ContatosPage,
    ContatoDetalhePage
  ],
  imports: [
    IonicPageModule.forChild(ContatosPage),
  ],
  providers: [
    ContatosProvider
  ]
})
export class ContatosPageModule {}
