import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';
import { HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-added-to-slack',
  templateUrl: './added-to-slack.component.html',
  styleUrls: ['./added-to-slack.component.css']
})
export class AddedToSlackComponent implements OnInit {
  message: string;
  isSuccess: boolean;
  isError: boolean;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const slack_team_code = this.route.snapshot.queryParamMap.get('code');
    this.getSlackTeam(slack_team_code);

    this.isSuccess = false;
    this.isError = false;
  }

  getSlackTeam(slack_team_code) {
    this.http.get(Constants.slackTokenUrl(slack_team_code)).subscribe(data => {
      if (data['ok'] === false) {
        this.isSuccess = false;
        this.isError = true;
        this.message = 'An error occured. Please try again';
      } else {
        this.createSlackGroup(
          data['access_token'],
          data['bot']['bot_access_token']
        );
      }
    });
  }

  createSlackGroup(access_token, bot_token) {
    this.http.post(Constants.newSlackGroupUrl(access_token, bot_token), null, {
      params: Constants.newSlackGroupParams(access_token, bot_token)
    }).subscribe(data => {
      this.isSuccess = true;
      this.isError = false;
      this.message =
        'You and your teammates will each receive a message in your Slackbot channel inviting you to join your new Xapnik group.';
    }, (err: HttpErrorResponse) => {
      this.isSuccess = false;
      this.isError = true;
      this.message = 'An error occured. Please try again';
    });
  }

  ngOnInit() {}
}
