import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  users: Object;
  groupName: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(res => this.groupName = res.groupName);
    this.getRemoteUsers();
  }

  ngOnInit() {}

  getLocalUsers() {
    this.users = [
      {
        name: 'Edem Kumodzi',
        username: 'edemkumodzi',
        avatar:
          'https://pbs.twimg.com/profile_images/935548340804227072/faXGofrV_400x400.jpg'
      },
      {
        name: 'Kirsten Lambsertsen',
        username: 'mspseudolus',
        avatar:
          'https://pbs.twimg.com/profile_images/630619555975593984/r0gBJqUi_400x400.png'
      }
    ];
  }

  getRemoteUsers() {
    this.http.get(Constants.usersUrl(this.groupName)).subscribe(data => {
      this.users = data;
    });
  }
}
