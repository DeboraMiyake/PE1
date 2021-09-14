//Tudo nesse arquivo trata a logica de apresentação 

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  password;
  email;

  constructor(
      //injeção de dependencia
      private builder: FormBuilder,     
      private service: LoginService
   ){}

  ngOnInit() {
    this.loginForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]], password: ['', [Validators.required, Validators.minLength(8) ]],
    })
  }
  
  login(){
    const user = this.loginForm.value;
    this.service.login(user);
  }  
}
