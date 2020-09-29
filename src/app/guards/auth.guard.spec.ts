import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CosplayersModule } from './../cosplayers/cosplayers.module';

import { AuthGuard } from './auth.guard';
import { AuthService } from './../services/auth.service';

interface IRequestMock {
  email: string;
  password: string;
}
class MockAuthService {
  private isLogged = false;

  login({ email, password }: IRequestMock) {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = true;
  }

  getIsUserLogged() {
    return this.isLogged;
  }
}

fdescribe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CosplayersModule],
      providers: [
        AuthService,
        { provide: AuthService, useClass: MockAuthService },
      ],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be able to acess without login', () => {
    expect(authService).toBeTruthy();
    expect(guard.canActivate(null, null)).toBeFalse();
  });

  it('should be able to acess with login', () => {
    expect(authService).toBeTruthy();
    authService.login({ email: '', password: '' });
    expect(guard.canActivate(null, null)).toBeTrue();
  });
});
