import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { IndexComponent } from './pages/index/index/index.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SuitesComponent } from './pages/suites/suites/suites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    SuitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
