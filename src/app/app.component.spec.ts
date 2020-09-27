import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

// Components, pipes and directives
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

// Modules
import { CosplayersModule } from './cosplayers/cosplayers.module';

// Services and guards
import { AuthService } from './services/auth.service';

class MockAuthService {
  private isLogged = false;
  loginEmitter$ = new Subject<boolean>();

  login() {
    this.isLogged = true;
    this.loginEmitter$.next(true);
  }

  logout() {
    this.isLogged = false;
    this.loginEmitter$.next(this.isLogged);
  }
}

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CosplayersModule,
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        MenuComponent,
      ],
      providers: [
        AppComponent,
        AuthService,
        // { provide: AuthService, useClass: MockAuthService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    service = TestBed.inject(AuthService);
    app = fixture.componentInstance;
    app.ngOnInit();
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not show menu before login', () => {
    app.logged = false;
    const htmlMenu = compiled.querySelector('#main-menu');
    expect(htmlMenu).toBeNull();
  });

  it('should show menu after login', () => {
    app.logged = true;
    fixture.detectChanges();
    const htmlMenu = compiled.querySelector('#main-menu');
    expect(htmlMenu).toBeTruthy();
  });

  it('should emit user loggedIn by auth service', () => {
    expect(app.logged).toBeFalse();
    service.login();
    expect(app.logged).toBeTrue();
  });

});
