import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { FakeDbService } from './../db/fake-db.service';

interface IRequestLogin {
  email: string;
  password: string;
}

interface IRequestCreateUser {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = false;
  username: string;
  loginEmitter$ = new Subject<boolean>();

  constructor(private apiService: FakeDbService, private router: Router) {}

  login({ email, password }: IRequestLogin) {
    const response = this.apiService.createSession({ email, password });

    if (response.statusCode === 201) {
      this.username = this.apiService.getUsername();
      this.isLogged = true;
      this.loginEmitter$.next(this.isLogged);
      return true;
    } else {
      this.isLogged = false;
      this.loginEmitter$.next(this.isLogged);
      return false;
    }
  }

  logout() {
    this.apiService.resetUsername();
    this.username = this.getUsername();
    this.isLogged = false;
    this.loginEmitter$.next(this.isLogged);
  }

  getIsUserLogged() {
    return this.isLogged;
  }

  getUsername() {
    return this.username;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  createUser({ name, email, password }: IRequestCreateUser) {
    const responseNewUser = this.apiService.createUser({
      name,
      email,
      password,
    });
    return responseNewUser;
  }
}
