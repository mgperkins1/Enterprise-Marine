import { CurrentUserService } from './../current-user.service';
import { RestService } from './../rest.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAuthenticated: boolean;
  errorMessage: string;

  constructor(
    private rest: RestService,
    private router: Router,
    private currentUserService: CurrentUserService,
  ) { }

  onSubmit(login) {
    const creds = { email: login.email, password: login.password };

    this.rest.loginUser(creds).subscribe(res => {
      this.currentUserService.initCurrentUser(res);
      this.router.navigate(['/calendar']);
    });
  }
}
