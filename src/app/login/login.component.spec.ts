import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not login without provide email and password', () => {
    component.handleLogin();
    expect(component.feedback).toContain('informar e-mail e senha');
  });

  it('should not be able to login with wrong email or passowrd', () => {
    component.email = 'email@email.com';
    component.password = '123456';
    component.handleLogin();
    expect(component.feedback).toContain('incorreto');

    component.email = 'fake@email.com';
    component.password = '1234567';
    component.handleLogin();
    expect(component.feedback).toContain('incorreto');
  });

  it('should be able show welcome mensage after login', () => {
    component.email = 'fake@email.com';
    component.password = '123456';
    component.handleLogin();
    expect(component.feedback).toContain('Bem vindo');
  });
});
