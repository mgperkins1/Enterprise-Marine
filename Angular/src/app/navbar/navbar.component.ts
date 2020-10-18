import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe((data: string) => {
      this.username = data;
    });
  }
}
