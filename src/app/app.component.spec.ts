import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not show menu before login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.logged).toBeFalse();
  });

  it('should not show in html menu before login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#main-menu')).toBeFalsy();
    app.handleLogin();
    expect(app.logged).toBeTrue();
    fixture.detectChanges();
    expect(compiled.querySelector('#main-menu')).toBeTruthy();
  });

  it('should not show menu before login in html', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#login-button').textContent).toContain('Login');
  });

});
