import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.css']
})
export class GroupUserComponent implements OnInit {
  @Input() name: string;
  @Input() username: string;
  @Input() avatar: string;

  constructor() {}

  ngOnInit() {}
}
