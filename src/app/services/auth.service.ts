import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { FakeDbService } from './../db/fake-db.service';

interface IRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = false;
  loginEmitter$ = new Subject<boolean>();

  constructor(private apiService: FakeDbService) {}

  login({ email, password }: IRequest) {
    const response = this.apiService.createSession({ email, password });

    if (response.statusCode === 201) {
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
    this.isLogged = false;
    this.loginEmitter$.next(this.isLogged);
  }

  getIsUserLogged() {
    return this.isLogged;
  }
}
