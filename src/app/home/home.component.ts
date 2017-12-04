import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  checkUserInvite(token, groupName) {
    this.http
      .get(Constants.checkInviteUrl(token, groupName))
      .subscribe(data => {
        console.log(data);
      });
  }
}
