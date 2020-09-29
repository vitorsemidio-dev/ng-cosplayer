import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  feedback: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  handleSubmitForm() {
    if (this.loginForm.valid) {
      const resposne = this.authService.login(this.loginForm.value);
      if (resposne) {
        this.router.navigate(['/cosplayers']);
      } else {
        this.feedback = 'E-mail ou senha incorreto';
      }
    } else {
      this.feedback = 'É necessário informar e-mail e senha';
    }
  }
}
