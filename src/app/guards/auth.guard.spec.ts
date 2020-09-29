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

const createMockRoute = (id: string) => {
  return {
    params: { id },
  } as any;
};

const createMockRouteState = () => null;

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  const correctEmail = 'user01@email.com';
  const correctPassword = '123456';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CosplayersModule],
      providers: [AuthService],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be able to acess without login', () => {
    const route = createMockRoute(null);
    const state = createMockRouteState();
    const allowAccess = guard.canActivate(route, state);
    expect(allowAccess).toBeFalse();
  });

  it('should be able to acess with login', () => {
    const route = createMockRoute(null);
    const state = createMockRouteState();
    authService.login({ email: correctEmail, password: correctPassword });
    const allowAccess = guard.canActivate(route, state);
    expect(allowAccess).toBeTrue();
  });
});
