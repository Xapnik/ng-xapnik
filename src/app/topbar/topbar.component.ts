import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  slackImageSource: string;
  slackImageSourceSet: string;

  constructor() {}

  ngOnInit() {
    this.slackImageSource =
      'https://platform.slack-edge.com/img/add_to_slack.png';
    this.slackImageSourceSet =
      'https://platform.slack-edge.com/img/add_to_slack.png 1x,' +
      'https://platform.slack-edge.com/img/add_to_slack@2x.png 2x';
  }

  addToSlack() {
    window.location.href = Constants.SLACK_URL;
  }
}
