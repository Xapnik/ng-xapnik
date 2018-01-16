import { Component, OnInit } from '@angular/core';

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
    console.log('hello');
  }

}
