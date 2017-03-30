import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TabsModule, AlertModule } from 'ng2-bootstrap';

import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InstructorComponent } from './instructor/instructor.component';
import { NewInstructorComponent } from './new-instructor/new-instructor.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authguard.service';
import { RoleGuard } from './auth/roleguard.service';
import { InstructorService } from './instructor/instructor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    InstructorComponent,
    NewInstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    TabsModule,
    AlertModule
  ],
  providers: [
    AuthService,
    provideAuth({
      tokenGetter: () => { return localStorage.getItem('token') }
    }),
    InstructorService,
    AuthGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
