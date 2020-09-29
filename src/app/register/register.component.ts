import { Component, OnInit } from '@angular/core';

interface RegisterFields {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  name: string;

  feedback: string;

  constructor() {}

  ngOnInit(): void {}

  handleRegister() {
    this.feedback = this.validateLogin({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  private validateLogin({ name, email, password }: RegisterFields) {
    if (!name) {
      return 'É necessário informar o nome';
    }

    if (!email) {
      return 'É necessário informar o email';
    }

    if (!password) {
      return 'É necessário informar a senha';
    }

    return `Conta criada com sucesso. Bem vindo, ${name}`;
  }
}
