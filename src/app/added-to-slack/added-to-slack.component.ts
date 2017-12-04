import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Component({
  selector: 'app-added-to-slack',
  templateUrl: './added-to-slack.component.html',
  styleUrls: ['./added-to-slack.component.css']
})
export class AddedToSlackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(res => this.getSlackTeam(res.code));
  }

  getSlackTeam(slack_team_code) {
    this.http.get(Constants.slackTokenUrl(slack_team_code)).subscribe(data => {
      this.createSlackGroup(
        data['access_token'],
        data['bot']['bot_access_token']
      );
    });
  }

  createSlackGroup(access_token, bot_token) {
    this.http
      .post(Constants.newSlackGroupUrl(access_token, bot_token), null, null)
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit() {}
}
