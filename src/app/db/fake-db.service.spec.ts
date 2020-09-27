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

  // Cosplayer Tests

  it('should list cosplayers', () => {
    const cosplayers = service.getCosplayers();
    expect(cosplayers.length).toBeGreaterThan(0);
  });

  it('should select Asuna Cosplayer', () => {
    const cosplayer = service.getCosplayerById('1');
    expect(cosplayer).toBeTruthy();
    expect(cosplayer.name).toBe('Asuna');
  });

  it('should assert there is at least 1 cosplay in the list of cosplayer', () => {
    const cosplayer = service.getCosplayerById('1');
    expect(cosplayer.cosplays.length).toBeGreaterThan(0);
  });

  it('should assert image, price and name of a cosplay are valid', () => {
    const cosplayer = service.getCosplayerById('1');
    const firstCosplay = cosplayer.cosplays[0];
    expect(firstCosplay).toBeTruthy();
    expect(firstCosplay.name).toBeTruthy();
    expect(firstCosplay.price).toBeTruthy();
    expect(firstCosplay.price).not.toBeLessThan(0);
    expect(firstCosplay.imageUrl).toBeTruthy();
  });
});
