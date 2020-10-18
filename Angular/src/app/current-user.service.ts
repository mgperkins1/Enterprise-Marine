import { SharedService } from './shared.service';
import { RestService } from './rest.service';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser: User;

  constructor(private rest: RestService, private sharedService: SharedService) { }

  initCurrentUser(token) {
    this.rest.getCurrentUser(token).subscribe(res => {
      this.currentUser = new User(res._id, res.username, res.email, token);
      this.sharedService.setData(this.currentUser.username);
    });
  }
}
