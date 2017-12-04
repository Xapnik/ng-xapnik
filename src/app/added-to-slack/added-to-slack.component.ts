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
    const slack_team_code = this.route.snapshot.queryParamMap.get('code');
    console.log(slack_team_code);
    this.getSlackTeam(slack_team_code);
  }

  getSlackTeam(slack_team_code) {
    this.http.get(Constants.slackTokenUrl(slack_team_code)).subscribe(data => {
      console.log(data);
      this.createSlackGroup(
        data['access_token'],
        data['bot']['bot_access_token']
      );
    });
  }

  createSlackGroup(access_token, bot_token) {
    this.http.post(Constants.newSlackGroupUrl(access_token, bot_token), {}).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
