import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';
import { AuthService } from './../services/auth.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MenuComponent],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show username', () => {
    component.username = 'Fulano';
    fixture.detectChanges();
    const welcomeUser = compiled.querySelector('#welcome-user');
    expect(welcomeUser.innerHTML.trim()).toContain('Olá', component.username);
  });

  it('should not show username without login', () => {
    expect(component.username).toBeUndefined();
  });

  it('should destroy menu after logout', () => {
    component.username = 'Jane Doe';
    expect(component.username).toBeTruthy();
    component.handleLogout();
    fixture.detectChanges();
    expect(component.username).toBeFalsy();
  });
});
