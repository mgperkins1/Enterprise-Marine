import { CurrentUserService } from './../current-user.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;

  constructor(private currentUserService: CurrentUserService, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => {
      this.username = data;
    });
  }
}
