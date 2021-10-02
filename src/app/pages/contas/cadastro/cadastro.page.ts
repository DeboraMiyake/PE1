import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ContaService } from '../service/conta-service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  contasForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private conta: ContaService,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contasForm = this.builder.group({
      valor: ['', [Validators.required, Validators.min(0.01)]],
      parceiro: ['', [Validators.required, Validators.minLength(5)]],
      descricao: ['', [Validators.required, Validators.minLength(6)]],
      tipo: ['', [Validators.required]]
    });
  }

  /* Salva a nova conta no FireBase na coleção "conta"; */
  registraConta(){
    const conta = this.contasForm.value;
    this.conta.registraConta(conta).then(() => this.nav.navigateForward('contas/pagar'));
  }
}
