import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Register';
  name: string;
  accountCreated = false;

  constructor(private rest: RestService, private router: Router) { }

  onSubmit(register) {
    const newUser = { username: register.username, password: register.password, email: register.email };

    this.rest.registerUser(newUser).subscribe(res => {
      if (res) {
        this.name = res.username;
        this.accountCreated = true;
      }
    });
  }

  onClick() {
    this.router.navigate(['login']);
  }
}
