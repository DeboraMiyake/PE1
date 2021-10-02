import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroPage } from '../cadastro/cadastro.page';
import { PagarPage } from '../pagar/pagar.page';
import { ReceberPage } from '../receber/receber.page';
import { RelatorioPage } from '../relatorio/relatorio.page';

const routes: Routes = [
  {
    path:'', children: [
      { path: 'pagar', component: PagarPage },
      { path: 'receber', component: ReceberPage },
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
    PagarPage,
    ReceberPage,
    CadastroPage,
    RelatorioPage
  ]
})
export class ContasRoutingModule { }
