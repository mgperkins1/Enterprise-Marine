import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  // isAuthenticated: boolean;
  // submitted = false;
  // errorMessage: string;

  // title = 'Login';
  // bodyText = `Movie Ticket Booking is an online application where you can book
  // tickets for your favorite movie. Please login to the application to
  // grab your movie tickets!`;


  constructor(
    // private sharedService: SharedService,
    // private loginService: LoginService,
    // private router: Router
  ) { }

  // onSubmit(login) {
  //   this.submitted = true;
  //   const USERNAME = login.username;
  //   const PASSWORD = login.password;
  // this.loginService.isUserAuthenticated(USERNAME, PASSWORD).subscribe(
  //   result => {
  //     if (result) {
  //       this.sharedService.setData(USERNAME);
  //       this.router.navigate(['movie-list']);
  //     } else {
  //       this.isAuthenticated = false;
  //     }
  //   }
  // );
  // }
}
