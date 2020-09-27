import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  feedback: string;

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    this.feedback = this.validateLogin(this.email, this.password);
  }

  private validateLogin(email: string, password: string) {
    if (!email || !password) {
      return 'É necessário informar e-mail e senha';
    }

    if (email !== 'fake@email.com' || password !== '123456') {
      return 'E-mail ou senha incorreto';
    }

    return 'Bem vindo, fake';
  }
}
