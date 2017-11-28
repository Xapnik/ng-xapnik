import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
// import { HttpClient } from '@angular/common/http/src/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slackImageSource: string;
  slackImageSourceSet: string;

  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.slackImageSource = "https://platform.slack-edge.com/img/add_to_slack.png";
    this.slackImageSourceSet = "https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x";
  }

  addToSlack() { window.location.href = Constants.SLACK_URL; }

  // createSlackGroup(access_token, bot_token) {
  //   this.http.post(Constants.newSlackGroupUrl(access_token, bot_token), null, null)
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  // }

  // getSlackTeam(slack_team_code) {
  //   this.http.get(Constants.slackTokenUrl(slack_team_code))
  //     .subscribe(data => {
  //       this.createSlackGroup(data['access_token'], data['bot']['bot_access_token']);
  //     });
  // }

  // checkUserInvite(token, groupName) {
  //   this.http.get(Constants.checkInviteUrl(token, groupName))
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  // }

}
