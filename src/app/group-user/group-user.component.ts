import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.css']
})
export class GroupUserComponent implements OnInit {
  @Input() userId: string;
  @Input() username: string;
  @Input() avatar: string;
  @Input() tweetCount: string;
  @Input() instagramCount: string;
  @Input() disqusCount: string;

  constructor() {
  }

  ngOnInit() {}
}
