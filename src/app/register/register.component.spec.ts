import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AppModule } from './../app.module';
import { AuthService } from './../services/auth.service';

xdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [RegisterComponent],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
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
    component.registerForm.patchValue({
      name: 'Fake',
      email: 'fake@email.com',
      password: '123456',
    });
    component.handleRegister();
    const spyOnCreateUser = spyOn(service, 'createUser').and.callThrough();
    expect(spyOnCreateUser).toHaveBeenCalled();
  });
});
