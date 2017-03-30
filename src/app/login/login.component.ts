import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string;

  constructor(private auth: AuthService) { }

  onLoginSubmit(credentials) {
    this.auth.login(credentials)
      .map(res => res.json())
      .subscribe (
        response => this.auth.finishAuthentication(response.token),
        error => this.errorMessage = error.json().message
      )
    // call the login method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
  }

  onSignupSubmit(credentials) {
    credentials.admin = true;
    this.auth.signup(credentials)
      .map(res => res.json())
      .subscribe (
        response => this.auth.finishAuthentication(response.token),
        error => this.errorMessage = error.json().message
      )
    // call the signup method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
  }

}
