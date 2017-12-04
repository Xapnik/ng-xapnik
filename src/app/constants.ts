import { environment } from '../environments/environment';
import { HttpParams } from '@angular/common/http';

export class Constants {
  private static SLACK_CLIENT_ID = environment.slackClientId;
  private static SLACK_CLIENT_SECRET = environment.slackClientSecret;
  private static REDIRECT_URL = environment.redirectUrl;
  private static API_BASE_URL = environment.apiBaseUrl;
  public static SLACK_URL =
    'https://slack.com/oauth/authorize?scope=incoming-webhook,commands,bot,team:read,users:read,chat:write:user&client_id=' +
    Constants.SLACK_CLIENT_ID +
    '&state=xpnk_add_to_slack' +
    '&redirect_uri=' +
    Constants.REDIRECT_URL;

  public static slackTokenUrl(slack_team_code) {
    return (
      'https://slack.com/api/oauth.access?client_id=' +
      Constants.SLACK_CLIENT_ID +
      '&client_secret=' +
      Constants.SLACK_CLIENT_SECRET +
      '&code=' +
      slack_team_code +
      '&redirect_uri=' +
      Constants.REDIRECT_URL
    );
  }

  public static newSlackGroupUrl(access_token, bot_token) {
    return Constants.API_BASE_URL + '/slack_new_group';
  }

  public static newSlackGroupParams(access_token, bot_token) {
    const params = {};
    params['team_token'] = access_token;
    params['bot_token'] = bot_token;
    params['testMode'] = !environment.production;
    return params;
  }

  public static checkInviteUrl(token, groupName) {
    return (
      Constants.API_BASE_URL +
      '/check_user_invite?xpnk_token=' +
      token +
      '&xpnk_group_name=' +
      groupName
    );
  }

  public static checkInviteParams(token, groupName) {
    const params = {};
    params['xpnk_token'] = token;
    params['xpnk_group_name'] = groupName;
    return params;
  }
}
