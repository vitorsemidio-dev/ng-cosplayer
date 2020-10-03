import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
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

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  feedback: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleSubmitForm() {
    const formValues = this.registerForm.value as RegisterFields;
    this.handleRegister(formValues);
  }

  private handleRegister({ name, email, password }: RegisterFields) {
    const response = this.authService.createUser({
      name,
      email,
      password,
    });

    this.handleResponse(response.statusCode);
  }

  private handleResponse(statusCode: number) {
    this.authService.redirectTo('login');
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
