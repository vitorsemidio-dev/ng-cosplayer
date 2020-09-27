import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged = false;
  loginEmitter$ = new Subject<boolean>();

  constructor() { }

  login() {
    this.isLogged = true;
    this.loginEmitter$.next(this.isLogged);
  }

  logout() {
    this.isLogged = false;
    this.loginEmitter$.next(this.isLogged);
  }
}
