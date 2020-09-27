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

  it('[ts]should not show menu before login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.logged).toBeFalse();
  });

  it('[html]should not show menu before login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const htmlMenu = compiled.querySelector('#main-menu');
    expect(htmlMenu).toBeNull();
  });

  it('[ts] should show menu after login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    app.handleLogin();
    expect(app.logged).toBeTrue();
  });

  it('[html] should show menu after login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const navBeforeLogin = compiled.querySelector('#main-menu');
    expect(navBeforeLogin).toBeNull();

    app.handleLogin();
    fixture.detectChanges();
    const navAfterLogin = compiled.querySelector('#main-menu');
    const buttonLogout = compiled.querySelector('#btn-logout');
    expect(navAfterLogin).toBeTruthy();
    expect(buttonLogout).toBeTruthy();
    expect(buttonLogout.textContent).toContain('Logout');
  });

  it('[ts] should hide menu after logout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();

    expect(app.logged).toBeFalse();
    app.handleLogin();
    expect(app.logged).toBeTrue();
    app.handleLogout();
    expect(app.logged).toBeFalse();
  });

  it('[html] should hide menu after logout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    app.handleLogin();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(app.logged).toBeTrue();
    const navBeforeLogin = compiled.querySelector('#main-menu');
    expect(navBeforeLogin).toBeTruthy();

    app.handleLogout();
    fixture.detectChanges();
    const navAfterLogout = compiled.querySelector('#main-menu');
    expect(navAfterLogout).toBeNull();
  });

});
