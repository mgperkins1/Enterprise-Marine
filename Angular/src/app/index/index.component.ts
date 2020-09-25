import { SharedService } from '../shared.service';
import { CurrentUserService } from '../current-user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private currentUserService: CurrentUserService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentUserService.initCurrentUser(params.token);
      this.sharedService.setData(this.currentUserService.getUsername());
    });
  }

}
