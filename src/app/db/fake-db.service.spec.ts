import { TestBed } from '@angular/core/testing';

import { FakeDbService } from './fake-db.service';

describe('FakeDbService', () => {
  let service: FakeDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create session', () => {
    const email = 'user01@email.com';
    const password = '123456';
    const response = service.createSession({ email, password });
    expect(response.message).toContain('válida');
    expect(response.statusCode).toEqual(201);
  });

  it('should not create session with incorrect password', () => {
    const email = 'user01@email.com';
    const wrongPassword = 'wrong-password';
    const response = service.createSession({ email, password: wrongPassword });
    expect(response.message).toContain('incorreta');
    expect(response.statusCode).toEqual(401);
  });

  it('should not create session with incorrect email', () => {
    const wrongEmail = 'wrong-email@email.com';
    const password = '123456';
    const response = service.createSession({ email: wrongEmail, password });
    expect(response.message).toContain('incorreta');
    expect(response.statusCode).toEqual(401);
  });

  it('should not create session with incorrect combination', () => {
    const wrongEmail = 'wrong-email@email.com';
    const wrongPassword = 'wrong-password';
    const response = service.createSession({ email: wrongEmail, password: wrongPassword });
    expect(response.message).toContain('incorreta');
    expect(response.statusCode).toEqual(401);
  });
});
