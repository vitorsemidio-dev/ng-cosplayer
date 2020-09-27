import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', (done) => {
    service.loginEmitter$.subscribe(isLogged => {
      expect(isLogged).toBeTrue();
      done();
    });
    service.login();
  });

  it('should logout', (done) => {
    service.loginEmitter$.subscribe(isLogged => {
      expect(isLogged).toBeFalse();
      done();
    });
    service.logout();
  });
});
