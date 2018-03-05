import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var OAuth: any;

@Component({
  selector: 'app-group-auth',
  templateUrl: './group-auth.component.html',
  styleUrls: ['./group-auth.component.css']
})
export class GroupAuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  linkTwitter() {
    OAuth.popup('twitter')
      .done(function(result) {
        const usertwttrtoken = result.oauth_token;
        const usertwttrsecret = result.oauth_token_secret;
        const provider = result.provider;

        result.me().done(function(data) {
          const usertwttrname = data.alias;
          const usertwttrid = data.raw.id_str;
          const usertwttravatar = data.raw.profile_image_url;
          const auth_obj = {
            Twitter_ID: usertwttrid,
            Twitter_user: usertwttrname,
            Twitter_token: usertwttrtoken,
            Twitter_secret: usertwttrsecret,
            Profile_image: usertwttravatar
          };
          console.log('new_auth_twitter mydata: ' + JSON.stringify(auth_obj));

          // save twitter user
        });
      })
      .fail(function(err) {});
  }
}
