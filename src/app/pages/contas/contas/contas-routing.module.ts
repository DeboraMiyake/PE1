import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroPage } from '../cadastro/cadastro.page';
import { ListaPage } from '../lista/lista.page';
import { RelatorioPage } from '../relatorio/relatorio.page';

const routes: Routes = [
  {
    path:'', children: [
      { path: 'pagar', component: ListaPage },
      { path: 'receber', component: ListaPage },
      { path: 'lista', component: ListaPage },
      { path: 'cadastro', component: CadastroPage },
      { path: 'relatorio', component: RelatorioPage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListaPage,
    CadastroPage,
    RelatorioPage
  ]
})
export class ContasRoutingModule { }
