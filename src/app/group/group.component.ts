import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  users: { name: string; username: string; avatar: string }[];
  groupName: string;

  constructor(private route: ActivatedRoute) {
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
    this.route.params.subscribe(res => this.groupName = res.groupName.toUpperCase());
  }

  ngOnInit() {}
}
