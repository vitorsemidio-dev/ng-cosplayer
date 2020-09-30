import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subLogin: Subscription;
  username: string;
  logged = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.subLogin = this.authService.loginEmitter$.subscribe((isLogged) => {
      this.logged = isLogged;
      this.username = this.authService.getUsername();
    });
  }

  ngOnDestroy() {
    if (this.subLogin) {
      this.subLogin.unsubscribe();
    }
  }
}
