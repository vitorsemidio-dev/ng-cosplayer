import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Module
import { AppRoutingModule } from './app-routing.module';
import { CosplayersModule } from './cosplayers/cosplayers.module';

// Components, directives and pipes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';

// Services and guards
import { AuthService } from './services/auth.service';
import { CosplayerService } from './services/cosplayer.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CosplayersModule,
  ],
  providers: [AuthService, CosplayerService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
