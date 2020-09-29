import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be able to register without name', () => {
    component.email = 'fake@mail.com';
    component.password = '123456';
    component.handleRegister();
    expect(component.feedback).toContain('informar', 'nome');
  });

  it('should not be able to register without email', () => {
    component.name = 'Fake';
    component.password = '123456';
    component.handleRegister();
    expect(component.feedback).toContain('informar', 'email');
  });

  it('should not be able to register without password', () => {
    component.name = 'Fake';
    component.email = 'fake@mail.com';
    component.handleRegister();
    expect(component.feedback).toContain('informar', 'senha');
  });

  it('should be able to register', () => {
    component.name = 'Fake';
    component.email = 'fake@mail.com';
    component.password = '123456';
    component.handleRegister();
    expect(component.feedback).toContain('criada com sucesso');
    expect(component.feedback).toContain(component.name);
  });
});
