import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: HTMLElement;

  const correctEmail = 'user01@email.com';
  const correctPassword = '123456';

  const incorrectEmail = 'incorrect-email@email.com';
  const incorrectPassword = 'incorrect-password';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not login without provide email and password', () => {
    component.handleSubmitForm();

    expect(component.feedback).toContain('informar e-mail e senha');
    fixture.detectChanges();
    const divInvalid = compiled.querySelector('.alert-invalid');
    expect(divInvalid.innerHTML.trim()).toContain(component.feedback.trim());
  });

  it('should not be able to login with wrong email or passowrd', () => {
    component.loginForm.patchValue({
      email: incorrectEmail,
      password: incorrectPassword,
    });
    component.handleSubmitForm();
    expect(component.feedback).toContain('incorreto');
    fixture.detectChanges();
    const divInvalid = compiled.querySelector('.alert-invalid');
    expect(divInvalid.innerHTML.trim()).toContain(component.feedback.trim());
  });

  it('should be able to login with correct email and password', () => {
    component.loginForm.patchValue({
      email: correctEmail,
      password: correctPassword,
    });
    component.handleSubmitForm();
    expect(component.feedback).toBeUndefined();
    fixture.detectChanges();
    const divInvalid = compiled.querySelector('.alert-invalid');
    expect(divInvalid).toBeNull();
  });

  xit('should validator email', () => {
    // TODO
  });

  xit('should validator password minLength', () => {
    // TODO
  });
});
