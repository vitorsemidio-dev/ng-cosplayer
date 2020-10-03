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

  // handleSubmitForm() {

  //   this.handleRegister(formValues);
  // }

  // { name, email, password }: RegisterFields

  handleRegister() {
    const formValues = this.registerForm.value as RegisterFields;
    const { name, email, password } = formValues;
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
}
