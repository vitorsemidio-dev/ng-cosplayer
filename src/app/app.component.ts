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
  logged = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.subLogin = this.authService.loginEmitter$.subscribe(
      (isLogged) => (this.logged = isLogged)
    );
  }

  ngOnDestroy() {
    if (this.subLogin) {
      this.subLogin.unsubscribe();
    }
  }
}
