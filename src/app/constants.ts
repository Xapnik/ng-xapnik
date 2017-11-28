export class Constants {
  private static SLACK_CLIENT_ID = '6146359360.78348665680';
  private static SLACK_CLIENT_SECRET = 'e9aca6435a4e1fc82655fb181a6ede43';
  private static REDIRECT_URL = 'http://localhost:4200';
  private static API_BASE_URL = 'https://xapnik.com/api/v1';
  public static SLACK_URL = 'https://slack.com/oauth/authorize?scope=incoming-webhook,commands,bot,team:read,users:read,chat:write:user&client_id=' + Constants.SLACK_CLIENT_ID + '&state=xpnk_add_to_slack' + '&redirect_uri=' + Constants.REDIRECT_URL;

  public static slackTokenUrl(slack_team_code) {
    return 'https://slack.com/api/oauth.access?client_id=' + Constants.SLACK_CLIENT_ID + '&client_secret=' + Constants.SLACK_CLIENT_SECRET + '&code=' + slack_team_code + '&redirect_uri=' + Constants.REDIRECT_URL;
  }

  public static newSlackGroupUrl(access_token, bot_token) {
    return Constants.API_BASE_URL + '/slack_new_group?team_token=' + access_token + '&bot_token=' + bot_token + '&testMode=true';
  }

  public static checkInviteUrl(token, groupName) {
    return Constants.API_BASE_URL + '/check_user_invite?xpnk_token=' + token + '&xpnk_group_name=' + groupName;
  }
}