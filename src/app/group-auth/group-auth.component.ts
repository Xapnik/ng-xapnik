import { Component, OnInit } from '@angular/core';
declare var OAuth: any;

@Component({
  selector: 'app-group-auth',
  templateUrl: './group-auth.component.html',
  styleUrls: ['./group-auth.component.css']
})
export class GroupAuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  linkTwitter() {
    OAuth.redirect('twitter', 'callback/url');
  }

}
