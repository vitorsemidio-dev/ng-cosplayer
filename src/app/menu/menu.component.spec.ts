import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
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
    expect(welcomeUser.innerHTML.trim()).toContain(
      'Bem vindo',
      component.username
    );
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
